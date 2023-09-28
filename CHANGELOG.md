# 1.0.0-beta.1 (2023-09-28)


### Bug Fixes

* "int 1" in clear program (fixes [#111](https://github.com/PhearZero/TEALScript/issues/111)) ([8a9a60c](https://github.com/PhearZero/TEALScript/commit/8a9a60ca545e8847dd887845121f6215b8dbea5b))
* ** -> exp ([9ff2765](https://github.com/PhearZero/TEALScript/commit/9ff27658e2f7dcdc92e6b2442877f56cc8ccf7aa))
* add return to clear program with methods ([76fe8c7](https://github.com/PhearZero/TEALScript/commit/76fe8c7f3aa10bf4e214742e51e3bbeb258babee))
* fix Address.fromBytes ([2181bc3](https://github.com/PhearZero/TEALScript/commit/2181bc36dccc26bb28d9630faed113eab0a85646))
* improve comments in TEAL ([dafe152](https://github.com/PhearZero/TEALScript/commit/dafe152f8e5de1c59f19e53cfac951f6d16ec62c))
* make configAssetDecimals optional ([5fa30a4](https://github.com/PhearZero/TEALScript/commit/5fa30a4a92443f0c80c7a2a0bc1b42450503bc85))
* make onCompletion optional ([08c03e5](https://github.com/PhearZero/TEALScript/commit/08c03e57a98322e9eebeb37a9db2bcd635b1ee11))
* nested ternary ([f493a9c](https://github.com/PhearZero/TEALScript/commit/f493a9cdc45ceec592b449b17e60c1ea1f3cfcfc))
* proper >> and << support ([2a104bb](https://github.com/PhearZero/TEALScript/commit/2a104bb65583f15e1db0bf71a6ebf2841b0e860e))
* replace bytes with byte[] in abi method call ([28b8f46](https://github.com/PhearZero/TEALScript/commit/28b8f46855ad6de8f62b2b0b3ed79630d9f09177))
* rm empty line for variable-less callsubs ([d0ca5b1](https://github.com/PhearZero/TEALScript/commit/d0ca5b136175bfc1d2f19723297700b7213e1dbd))
* subroutines in clearState (fixes [#110](https://github.com/PhearZero/TEALScript/issues/110)) ([03505aa](https://github.com/PhearZero/TEALScript/commit/03505aa0c11b106ed71e5497cdd259a65ea7a07b))
* use json import ([69c9bb2](https://github.com/PhearZero/TEALScript/commit/69c9bb20e50f19d4db5b0bb1247e2686a505ef4e))
* use proper key in declared state ([4dfa95b](https://github.com/PhearZero/TEALScript/commit/4dfa95b9789947d2af8193c3aaa6a01508e7059d))
* write multiple lines in addSourceComment ([4b85f22](https://github.com/PhearZero/TEALScript/commit/4b85f222d78f038bffdcbec127ae2cf78af39d66))


### Features

* add version constant and script ([d8d2230](https://github.com/PhearZero/TEALScript/commit/d8d22300a30f4745676c882095e0c378eada1d1e))
* allow non-abi routing ([488899c](https://github.com/PhearZero/TEALScript/commit/488899c9e22c9e2d1c245fdb5456f5ab12916eb6))
* comments in abi_route branches ([148d581](https://github.com/PhearZero/TEALScript/commit/148d581cd68364ad0c714d6e85cf95cd5c0a54e9))
* fromIndex -> fromID ([4215d6f](https://github.com/PhearZero/TEALScript/commit/4215d6faa9cf8a770ef66334577ddc0e77c4b23c))
* json srcMap ([63e049a](https://github.com/PhearZero/TEALScript/commit/63e049ad470b4cf603308392fbe527e06f70e762))
* make fee optional for itxns, default to 0 ([0bc5551](https://github.com/PhearZero/TEALScript/commit/0bc55519c17503a1c9ebf628a4ef95d3d5f10d14))
* max-keys for state-maps ([7c9c2ab](https://github.com/PhearZero/TEALScript/commit/7c9c2ab2d3bdb6d96bd8c9daf308799fcdb7e2c1))
* non-bare action methods by default ([680f644](https://github.com/PhearZero/TEALScript/commit/680f6449981c0f17cffd4c1d5b2c4e940059b56b))
* pad string with empty bytes instead of space ([092d5a4](https://github.com/PhearZero/TEALScript/commit/092d5a46e6483fac6bfb636177bc04b3c080ae78))
* support abi method calls with txn args ([eeae8d8](https://github.com/PhearZero/TEALScript/commit/eeae8d8a88df3dc2cef1fccd3b85a8cc91584533))
* tempalte variables ([dd72931](https://github.com/PhearZero/TEALScript/commit/dd72931e5987b5f57b6c727e7ad98b702d7c0f09))
* this.pendingGroup for group itxns ([108ce0d](https://github.com/PhearZero/TEALScript/commit/108ce0d1c8b2276d1757bea09821fcc3cf30d6d3))
* throw error if clearState has arguments ([c688d1e](https://github.com/PhearZero/TEALScript/commit/c688d1ec8eb9039f5ad3aaf1777f0d0c98a84131))


### Reverts

* Revert "0.12.0: appSpec hints and bare_call_config (#40)" (#41) ([c7e7737](https://github.com/PhearZero/TEALScript/commit/c7e7737104db139ef41cbb5441f96bdd479c5755)), closes [#40](https://github.com/PhearZero/TEALScript/issues/40) [#41](https://github.com/PhearZero/TEALScript/issues/41)
