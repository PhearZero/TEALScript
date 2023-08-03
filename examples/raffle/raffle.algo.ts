import { Contract } from '../../src/lib/index';

type TicketRange = {start: number, end: number};

// eslint-disable-next-line no-unused-vars
class NFTRaffle extends Contract {
  /** The app ID of the randomness oracle */
  randomnessOracle = new GlobalStateKey<number>();

  /** The price of a single ticket (uALGO) */
  ticketPrice = new GlobalStateKey<number>();

  /** The asset to be raffled */
  asset = new GlobalStateKey<Asset>();

  /** After this round, tickets can no longer be purchased */
  endRound = new GlobalStateKey<number>();

  /** The randomness oracle round commitment */
  drawRound = new GlobalStateKey<number>();

  /** The range of tickets owned by each purchaser */
  tickets = new BoxMap<Address, TicketRange>();

  /** The total number of tickets purchased */
  totalTickets = new GlobalStateKey<number>();

  /** The winning ticket number */
  winningTicket = new GlobalStateKey<number>();

  /**
   * Create the raffle
   *
   * @param ticketPrice The price of a single ticket (uALGO)
   * @param randomnessOracle The app ID of the randomness oracle
   *
   */
  @handle.createApplication
  create(ticketPrice: number, randomnessOracle: number): void {
    this.randomnessOracle.set(randomnessOracle);
    this.ticketPrice.set(ticketPrice);
  }

  /**
   * Set the asset to be raffled
   *
   * @param asset The asset to be raffled
   *
   */
  setAsset(asset: Asset): void {
    assert(!this.asset.exists());

    sendAssetTransfer({
      assetReceiver: this.app.address,
      xferAsset: asset,
      assetAmount: 0,
      fee: 0,
    });

    this.asset.set(asset);
  }

  /**
   * Start the raffle
   *
   * @param end The round number when the raffle ends
   * @param draw The round number when the raffle is drawn
   *
   */
  startRaffle(end: number, draw: number): void {
    assert(this.app.address.assetBalance(this.asset.get()) > 0);

    assert(draw > end);
    this.endRound.set(end);
    this.drawRound.set(draw);
  }

  /**
   * Buy tickets. Note this can only be called once!
   * It would be possible to allow multiple purchases, but
   * for simplicity, only one purchase is allowed.
   *
   * @param payment The payment for the tickets
   * @param quanity The number of tickets to buy
   *
   * @returns The total number of tickets owned by the sender
   */
  buyTickets(payment: PayTxn, quanity: number): void {
    assert(globals.round < this.endRound.get());
    assert(quanity > 0);

    assert(payment.amount === this.ticketPrice.get() * quanity);
    assert(payment.sender === this.txn.sender);
    assert(payment.receiver === this.app.address);

    assert(!this.tickets.exists(payment.sender));

    const newTotal = this.totalTickets.get() + quanity + 1;

    this.tickets.set(payment.sender, { start: this.totalTickets.get(), end: newTotal - 1 });
    this.totalTickets.set(newTotal);
  }

  /** Draw the winning ticket */
  draw(): void {
    assert(!this.winningTicket.exists());

    const output = sendMethodCall<[uint64, string], string>({
      name: 'must_get',
      methodArgs: [this.drawRound.get(), ''],
      applicationID: Application.fromIndex(this.randomnessOracle.get()),
      fee: 0,
      onCompletion: 'NoOp',
    });

    this.winningTicket.set(extract_uint64(output, 0) / this.totalTickets.get());
  }

  /** Send the asset to the the sender if they have the winning ticket */
  claim(): void {
    const ticketRange = this.tickets.get(this.txn.sender);

    assert(ticketRange.start <= this.winningTicket.get());
    assert(ticketRange.end >= this.winningTicket.get());

    sendAssetTransfer({
      assetReceiver: this.txn.sender,
      xferAsset: this.asset.get(),
      assetAmount: this.app.address.assetBalance(this.asset.get()),
      assetCloseTo: this.txn.sender,
      fee: 0,
    });
  }

  /**
   * Allows purchasers to get a refund if the winning ticket has not been drawn
   * and 1512 rounds have passed since the draw round, meaning the oracle no
   * longer has the data for the draw round
   */
  getRefund(): void {
    assert(!this.winningTicket.exists());
    assert(globals.round > this.drawRound.get() + 1512);

    const ticketRange = this.tickets.get(this.txn.sender);
    const ticketCount = ticketRange.end - ticketRange.start + 1;

    this.tickets.delete(this.txn.sender);

    sendPayment({
      amount: this.ticketPrice.get() * ticketCount,
      receiver: this.txn.sender,
      fee: 0,
    });
  }
}
