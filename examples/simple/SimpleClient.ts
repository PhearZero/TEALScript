/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import type { TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "incr(uint64)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "decr(uint64)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "add(uint256,uint256)uint256": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "sub(uint256,uint256)uint256": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {
        "counter": {
          "type": "uint64",
          "key": "counter"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 1
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNDQuMAovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmQtZGV2cmVsL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgY2FsbF9Ob09wCgpOT1RfSU1QTEVNRU5URUQ6CgllcnIKCmluY3JlbWVudENvdW50ZXI6Cglwcm90byAxIDAKCgkvLyBleGFtcGxlcy9zaW1wbGUvc2ltcGxlLmFsZ28udHM6NwoJLy8gdGhpcy5jb3VudGVyLnZhbHVlID0gdGhpcy5jb3VudGVyLnZhbHVlICsgaQoJYnl0ZSAiY291bnRlciIKCWJ5dGUgImNvdW50ZXIiCglhcHBfZ2xvYmFsX2dldAoJZnJhbWVfZGlnIC0xIC8vIGk6IHVpbnQ2NAoJKwoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gaW5jcih1aW50NjQpdm9pZAphYmlfcm91dGVfaW5jcjoKCS8vIGk6IHVpbnQ2NAoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJYnRvaQoKCS8vIGV4ZWN1dGUgaW5jcih1aW50NjQpdm9pZAoJY2FsbHN1YiBpbmNyCglpbnQgMQoJcmV0dXJuCgppbmNyOgoJcHJvdG8gMSAwCgoJLy8gZXhhbXBsZXMvc2ltcGxlL3NpbXBsZS5hbGdvLnRzOjExCgkvLyB0aGlzLmluY3JlbWVudENvdW50ZXIoaSkKCWZyYW1lX2RpZyAtMSAvLyBpOiB1aW50NjQKCWNhbGxzdWIgaW5jcmVtZW50Q291bnRlcgoJcmV0c3ViCgovLyBkZWNyKHVpbnQ2NCl2b2lkCmFiaV9yb3V0ZV9kZWNyOgoJLy8gaTogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBkZWNyKHVpbnQ2NCl2b2lkCgljYWxsc3ViIGRlY3IKCWludCAxCglyZXR1cm4KCmRlY3I6Cglwcm90byAxIDAKCgkvLyBleGFtcGxlcy9zaW1wbGUvc2ltcGxlLmFsZ28udHM6MTUKCS8vIHRoaXMuY291bnRlci52YWx1ZSA9IHRoaXMuY291bnRlci52YWx1ZSAtIGkKCWJ5dGUgImNvdW50ZXIiCglieXRlICJjb3VudGVyIgoJYXBwX2dsb2JhbF9nZXQKCWZyYW1lX2RpZyAtMSAvLyBpOiB1aW50NjQKCS0KCWFwcF9nbG9iYWxfcHV0CglyZXRzdWIKCi8vIGFkZCh1aW50MjU2LHVpbnQyNTYpdWludDI1NgphYmlfcm91dGVfYWRkOgoJLy8gYjogdWludDI1NgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgoKCS8vIGE6IHVpbnQyNTYKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCgkvLyBleGVjdXRlIGFkZCh1aW50MjU2LHVpbnQyNTYpdWludDI1NgoJY2FsbHN1YiBhZGQKCWludCAxCglyZXR1cm4KCmFkZDoKCXByb3RvIDIgMAoKCS8vIGV4YW1wbGVzL3NpbXBsZS9zaW1wbGUuYWxnby50czoxOQoJLy8gcmV0dXJuIGEgKyBiOwoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQyNTYKCWZyYW1lX2RpZyAtMiAvLyBiOiB1aW50MjU2CgliKwoJYnl0ZSAweEZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYKCWImCglkdXBuIDIKCWJ5dGUgMHhGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGCgliPD0KCWFzc2VydAoJbGVuCglpbnQgMzIKCS0KCWludCAzMgoJZXh0cmFjdDMKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKLy8gc3ViKHVpbnQyNTYsdWludDI1Nil1aW50MjU2CmFiaV9yb3V0ZV9zdWI6CgkvLyBiOiB1aW50MjU2Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCgoJLy8gYTogdWludDI1NgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoKCS8vIGV4ZWN1dGUgc3ViKHVpbnQyNTYsdWludDI1Nil1aW50MjU2CgljYWxsc3ViIHN1YgoJaW50IDEKCXJldHVybgoKc3ViOgoJcHJvdG8gMiAwCgoJLy8gZXhhbXBsZXMvc2ltcGxlL3NpbXBsZS5hbGdvLnRzOjIzCgkvLyByZXR1cm4gYSAtIGI7CglmcmFtZV9kaWcgLTEgLy8gYTogdWludDI1NgoJZnJhbWVfZGlnIC0yIC8vIGI6IHVpbnQyNTYKCWItCglieXRlIDB4RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRgoJYiYKCWR1cG4gMgoJYnl0ZSAweEZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYKCWI8PQoJYXNzZXJ0CglsZW4KCWludCAzMgoJLQoJaW50IDMyCglleHRyYWN0MwoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb246CglpbnQgMQoJcmV0dXJuCgpjcmVhdGVfTm9PcDoKCW1ldGhvZCAiY3JlYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb24KCWVycgoKY2FsbF9Ob09wOgoJbWV0aG9kICJpbmNyKHVpbnQ2NCl2b2lkIgoJbWV0aG9kICJkZWNyKHVpbnQ2NCl2b2lkIgoJbWV0aG9kICJhZGQodWludDI1Nix1aW50MjU2KXVpbnQyNTYiCgltZXRob2QgInN1Yih1aW50MjU2LHVpbnQyNTYpdWludDI1NiIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoIGFiaV9yb3V0ZV9pbmNyIGFiaV9yb3V0ZV9kZWNyIGFiaV9yb3V0ZV9hZGQgYWJpX3JvdXRlX3N1YgoJZXJy",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDkKLy8gZXhhbXBsZXMvc2ltcGxlL3NpbXBsZS5hbGdvLnRzOjI3Ci8vIHRoaXMuaW5jcmVtZW50Q291bnRlcigxKQppbnQgMQpjYWxsc3ViIGluY3JlbWVudENvdW50ZXIKaW50IDEKcmV0dXJuCgppbmNyZW1lbnRDb3VudGVyOgoJcHJvdG8gMSAwCgoJLy8gZXhhbXBsZXMvc2ltcGxlL3NpbXBsZS5hbGdvLnRzOjcKCS8vIHRoaXMuY291bnRlci52YWx1ZSA9IHRoaXMuY291bnRlci52YWx1ZSArIGkKCWJ5dGUgImNvdW50ZXIiCglhcHBfZ2xvYmFsX2dldAoJYnl0ZSAiY291bnRlciIKCWJ5dGUgImNvdW50ZXIiCglhcHBfZ2xvYmFsX2dldAoJZnJhbWVfZGlnIC0xIC8vIGk6IHVpbnQ2NAoJKwoJYXBwX2dsb2JhbF9wdXQKCXJldHN1Yg=="
  },
  "contract": {
    "name": "Simple",
    "desc": "",
    "methods": [
      {
        "name": "incr",
        "args": [
          {
            "name": "i",
            "type": "uint64",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "decr",
        "args": [
          {
            "name": "i",
            "type": "uint64",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "add",
        "args": [
          {
            "name": "a",
            "type": "uint256",
            "desc": ""
          },
          {
            "name": "b",
            "type": "uint256",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "uint256",
          "desc": ""
        }
      },
      {
        "name": "sub",
        "args": [
          {
            "name": "a",
            "type": "uint256",
            "desc": ""
          },
          {
            "name": "b",
            "type": "uint256",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "uint256",
          "desc": ""
        }
      },
      {
        "name": "createApplication",
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        },
        "args": []
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

/**
 * Defines the types of available calls and state of the Simple smart contract.
 */
export type Simple = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'incr(uint64)void' | 'incr', {
      argsObj: {
        i: bigint | number
      }
      argsTuple: [i: bigint | number]
      returns: void
    }>
    & Record<'decr(uint64)void' | 'decr', {
      argsObj: {
        i: bigint | number
      }
      argsTuple: [i: bigint | number]
      returns: void
    }>
    & Record<'add(uint256,uint256)uint256' | 'add', {
      argsObj: {
        a: bigint | number
        b: bigint | number
      }
      argsTuple: [a: bigint | number, b: bigint | number]
      returns: bigint
    }>
    & Record<'sub(uint256,uint256)uint256' | 'sub', {
      argsObj: {
        a: bigint | number
        b: bigint | number
      }
      argsTuple: [a: bigint | number, b: bigint | number]
      returns: bigint
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'counter'?: IntegerState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type SimpleSig = keyof Simple['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends SimpleSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the Simple smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends SimpleSig> = Simple['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the Simple smart contract to the method's return type
 */
export type MethodReturn<TSignature extends SimpleSig> = Simple['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type SimpleCreateCalls = (typeof SimpleCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type SimpleCreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type SimpleDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: SimpleCreateCalls) => SimpleCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class SimpleCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the Simple smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the incr(uint64)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static incr(args: MethodArgs<'incr(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'incr(uint64)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.i],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the decr(uint64)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static decr(args: MethodArgs<'decr(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'decr(uint64)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.i],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the add(uint256,uint256)uint256 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static add(args: MethodArgs<'add(uint256,uint256)uint256'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'add(uint256,uint256)uint256' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the sub(uint256,uint256)uint256 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static sub(args: MethodArgs<'sub(uint256,uint256)uint256'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'sub(uint256,uint256)uint256' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b],
      ...params,
    }
  }
}

/**
 * A client to make calls to the Simple smart contract
 */
export class SimpleClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `SimpleClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue }
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof Simple['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the Simple smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: SimpleDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(SimpleCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the Simple smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'createApplication()void'>>> {
        return $this.mapReturnValue(await $this.appClient.create(SimpleCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the Simple smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the incr(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public incr(args: MethodArgs<'incr(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(SimpleCallFactory.incr(args, params))
  }

  /**
   * Calls the decr(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public decr(args: MethodArgs<'decr(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(SimpleCallFactory.decr(args, params))
  }

  /**
   * Calls the add(uint256,uint256)uint256 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public add(args: MethodArgs<'add(uint256,uint256)uint256'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(SimpleCallFactory.add(args, params))
  }

  /**
   * Calls the sub(uint256,uint256)uint256 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public sub(args: MethodArgs<'sub(uint256,uint256)uint256'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(SimpleCallFactory.sub(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<Simple['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get counter() {
        return SimpleClient.getIntegerState(state, 'counter')
      },
    }
  }

  public compose(): SimpleComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      incr(args: MethodArgs<'incr(uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.incr(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      decr(args: MethodArgs<'decr(uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.decr(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      add(args: MethodArgs<'add(uint256,uint256)uint256'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.add(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      sub(args: MethodArgs<'sub(uint256,uint256)uint256'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.sub(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as SimpleComposer
  }
}
export type SimpleComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the incr(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  incr(args: MethodArgs<'incr(uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): SimpleComposer<[...TReturns, MethodReturn<'incr(uint64)void'>]>

  /**
   * Calls the decr(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  decr(args: MethodArgs<'decr(uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): SimpleComposer<[...TReturns, MethodReturn<'decr(uint64)void'>]>

  /**
   * Calls the add(uint256,uint256)uint256 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  add(args: MethodArgs<'add(uint256,uint256)uint256'>, params?: AppClientCallCoreParams & CoreAppCallArgs): SimpleComposer<[...TReturns, MethodReturn<'add(uint256,uint256)uint256'>]>

  /**
   * Calls the sub(uint256,uint256)uint256 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  sub(args: MethodArgs<'sub(uint256,uint256)uint256'>, params?: AppClientCallCoreParams & CoreAppCallArgs): SimpleComposer<[...TReturns, MethodReturn<'sub(uint256,uint256)uint256'>]>

  /**
   * Makes a clear_state call to an existing instance of the Simple smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): SimpleComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): SimpleComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<SimpleComposerResults<TReturns>>
}
export type SimpleComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}