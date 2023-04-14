import algosdk from "algosdk";
import * as bkr from "beaker-ts";
export class ARC75 extends bkr.ApplicationClient {
    desc: string = "";
    override appSchema: bkr.Schema = { declared: {}, reserved: {} };
    override acctSchema: bkr.Schema = { declared: {}, reserved: {} };
    override approvalProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKCWIgbWFpbgoKYmFyZV9yb3V0ZV9jcmVhdGU6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCXR4biBBcHBsaWNhdGlvbklECglpbnQgMAoJPT0KCSYmCglhc3NlcnQKCWJ5dGUgMHgKCXBvcAoJY2FsbHN1YiBjcmVhdGUKCWludCAxCglyZXR1cm4KCmNyZWF0ZToKCXByb3RvIDAgMAoJcmV0c3ViCgp2ZXJpZnlNQlJQYXltZW50OgoJcHJvdG8gMiAwCgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czoxMwoJLy8gYXNzZXJ0KHBheW1lbnQuYW1vdW50ID09PSB0aGlzLmFwcC5hZGRyZXNzLm1pbkJhbGFuY2UgLSBwcmVNQlIpCglmcmFtZV9kaWcgLTEgLy8gcGF5bWVudDogcGF5CglndHhucyBBbW91bnQKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKCWFzc2VydAoJYWNjdF9wYXJhbXNfZ2V0IEFjY3RNaW5CYWxhbmNlCglhc3NlcnQKCWZyYW1lX2RpZyAtMiAvLyBwcmVNQlI6IHVpbnQ2NAoJLQoJPT0KCWFzc2VydAoKCS8vIGV4YW1wbGVzL2FyYzc1L2FyYzc1LmFsZ28udHM6MTQKCS8vIGFzc2VydChwYXltZW50LnJlY2VpdmVyID09PSB0aGlzLmFwcC5hZGRyZXNzKQoJZnJhbWVfZGlnIC0xIC8vIHBheW1lbnQ6IHBheQoJZ3R4bnMgUmVjZWl2ZXIKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKCWFzc2VydAoJPT0KCWFzc2VydAoJcmV0c3ViCgpzZW5kTUJSUGF5bWVudDoKCXByb3RvIDEgMAoKCS8vIGV4YW1wbGVzL2FyYzc1L2FyYzc1LmFsZ28udHM6MTgKCS8vIHNlbmRQYXltZW50KHsKCWl0eG5fYmVnaW4KCWludCBwYXkKCWl0eG5fZmllbGQgVHlwZUVudW0KCgkvLyBleGFtcGxlcy9hcmM3NS9hcmM3NS5hbGdvLnRzOjE5CgkvLyBzZW5kZXI6IHRoaXMuYXBwLmFkZHJlc3MKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKCWFzc2VydAoJaXR4bl9maWVsZCBTZW5kZXIKCgkvLyBleGFtcGxlcy9hcmM3NS9hcmM3NS5hbGdvLnRzOjIwCgkvLyByZWNlaXZlcjogdGhpcy50eG4uc2VuZGVyCgl0eG4gU2VuZGVyCglpdHhuX2ZpZWxkIFJlY2VpdmVyCgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czoyMQoJLy8gYW1vdW50OiBwcmVNQlIgLSB0aGlzLmFwcC5hZGRyZXNzLm1pbkJhbGFuY2UKCWZyYW1lX2RpZyAtMSAvLyBwcmVNQlI6IHVpbnQ2NAoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwoJYXNzZXJ0CglhY2N0X3BhcmFtc19nZXQgQWNjdE1pbkJhbGFuY2UKCWFzc2VydAoJLQoJaXR4bl9maWVsZCBBbW91bnQKCgkvLyBleGFtcGxlcy9hcmM3NS9hcmM3NS5hbGdvLnRzOjIyCgkvLyBmZWU6IDAKCWludCAwCglpdHhuX2ZpZWxkIEZlZQoJaXR4bl9zdWJtaXQKCXJldHN1YgoKYWJpX3JvdXRlX2FkZEFwcFRvV2hpdGVMaXN0OgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cgl0eG4gQXBwbGljYXRpb25JRAoJaW50IDAKCSE9CgkmJgoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDIKCXR4biBHcm91cEluZGV4CglpbnQgMQoJLQoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwoJYnRvaQoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJZXh0cmFjdCAyIDAKCWNhbGxzdWIgYWRkQXBwVG9XaGl0ZUxpc3QKCWludCAxCglyZXR1cm4KCmFkZEFwcFRvV2hpdGVMaXN0OgoJcHJvdG8gNyAwCgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czozNgoJLy8gcHJlTUJSID0gdGhpcy5hcHAuYWRkcmVzcy5taW5CYWxhbmNlCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCglhc3NlcnQKCWFjY3RfcGFyYW1zX2dldCBBY2N0TWluQmFsYW5jZQoJYXNzZXJ0CglmcmFtZV9idXJ5IC01IC8vIHByZU1CUjogdWludDY0CgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czozNwoJLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QgPSB7IGFjY291bnQ6IHRoaXMudHhuLnNlbmRlciwgYm94SW5kZXg6IGJveEluZGV4LCBhcmM6IGFyYyB9Cgl0eG4gU2VuZGVyCglmcmFtZV9kaWcgLTIgLy8gYm94SW5kZXg6IHVpbnQxNgoJY29uY2F0CglzdG9yZSAxMSAvLyBzdGF0aWMgZWxlbWVudHMKCWJ5dGUgMHgwMDI0IC8vIGhlYWQgZW5kCglzdG9yZSA4IC8vIGR5bmFtaWMgaGVhZAoJaW50IDM2CglzdG9yZSA5IC8vIGR5bmFtaWMgaGVhZCBvZmZzZXQKCWJ5dGUgMHgKCXN0b3JlIDEwIC8vIGR5bmFtaWMgZWxlbWVudHMKCWZyYW1lX2RpZyAtMSAvLyBhcmM6IGJ5dGVzCglkdXAKCWxlbgoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWNvbmNhdAoJbG9hZCAxMCAvLyBkeW5hbWljIGVsZW1lbnRzCglzd2FwCgljb25jYXQKCXN0b3JlIDEwIC8vIGR5bmFtaWMgZWxlbWVudHMKCWxvYWQgMTEgLy8gc3RhdGljIGVsZW1lbnRzCglsb2FkIDggLy8gZHluYW1pYyBoZWFkCglsb2FkIDEwIC8vIGR5bmFtaWMgZWxlbWVudHMKCWNvbmNhdAoJY29uY2F0CglmcmFtZV9idXJ5IC02IC8vIHdoaXRlbGlzdDogV2hpdGVsaXN0CgoJLy8gaWYwX2NvbmRpdGlvbgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czozOQoJLy8gdGhpcy53aGl0ZWxpc3QuZXhpc3RzKHdoaXRlbGlzdCkKCWZyYW1lX2RpZyAtNiAvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdAoJYm94X2dldAoJc3dhcAoJcG9wCglieiBpZjBfZWxzZQoKCS8vIGlmMF9jb25zZXF1ZW50CgkvLyBleGFtcGxlcy9hcmM3NS9hcmM3NS5hbGdvLnRzOjQwCgkvLyB0aGlzLndoaXRlbGlzdC5nZXQod2hpdGVsaXN0KS5wdXNoKGFwcElEKQoJZnJhbWVfZGlnIC02IC8vIHdoaXRlbGlzdDogV2hpdGVsaXN0Cglib3hfZ2V0Cglhc3NlcnQKCWR1cAoJaW50IDAKCWV4dHJhY3RfdWludDE2CglpbnQgMQoJKwoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWV4dHJhY3QgMiAwCgljb25jYXQKCWZyYW1lX2RpZyAtMyAvLyBhcHBJRDogdWludDY0CglpdG9iCgljb25jYXQKCWZyYW1lX2RpZyAtNiAvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdAoJZHVwCglib3hfZGVsCglwb3AKCXN3YXAKCWJveF9wdXQKCWIgaWYwX2VuZAoKaWYwX2Vsc2U6CgkvLyBleGFtcGxlcy9hcmM3NS9hcmM3NS5hbGdvLnRzOjQyCgkvLyBuZXdXaGl0ZWxpc3Q6IHVpbnQ2NFtdID0gW2FwcElEXQoJYnl0ZSAweDAwMDEKCWZyYW1lX2RpZyAtMyAvLyBhcHBJRDogdWludDY0CglpdG9iCgljb25jYXQKCWZyYW1lX2J1cnkgLTcgLy8gbmV3V2hpdGVsaXN0OiB1aW50NjRbXQoKCS8vIGV4YW1wbGVzL2FyYzc1L2FyYzc1LmFsZ28udHM6NDMKCS8vIHRoaXMud2hpdGVsaXN0LnB1dCh3aGl0ZWxpc3QsIG5ld1doaXRlbGlzdCkKCWZyYW1lX2RpZyAtNiAvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdAoJZHVwCglib3hfZGVsCglwb3AKCWZyYW1lX2RpZyAtNyAvLyBuZXdXaGl0ZWxpc3Q6IHVpbnQ2NFtdCglib3hfcHV0CgppZjBfZW5kOgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czo0NgoJLy8gdGhpcy52ZXJpZnlNQlJQYXltZW50KHBheW1lbnQsIHByZU1CUikKCWJ5dGUgMHgKCXBvcAoJZnJhbWVfZGlnIC01IC8vIHByZU1CUjogdWludDY0CglmcmFtZV9kaWcgLTQgLy8gcGF5bWVudDogcGF5CgljYWxsc3ViIHZlcmlmeU1CUlBheW1lbnQKCXJldHN1YgoKYWJpX3JvdXRlX3NldEFwcFdoaXRlbGlzdDoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJdHhuIEFwcGxpY2F0aW9uSUQKCWludCAwCgkhPQoJJiYKCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAxCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAzCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglleHRyYWN0IDIgMAoJY2FsbHN1YiBzZXRBcHBXaGl0ZWxpc3QKCWludCAxCglyZXR1cm4KCnNldEFwcFdoaXRlbGlzdDoKCXByb3RvIDUgMAoKCS8vIGV4YW1wbGVzL2FyYzc1L2FyYzc1LmFsZ28udHM6NTgKCS8vIHByZU1CUiA9IHRoaXMuYXBwLmFkZHJlc3MubWluQmFsYW5jZQoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwoJYXNzZXJ0CglhY2N0X3BhcmFtc19nZXQgQWNjdE1pbkJhbGFuY2UKCWFzc2VydAoJZnJhbWVfYnVyeSAtNCAvLyBwcmVNQlI6IHVpbnQ2NAoKCS8vIGV4YW1wbGVzL2FyYzc1L2FyYzc1LmFsZ28udHM6NTkKCS8vIHdoaXRlbGlzdDogV2hpdGVsaXN0ID0geyBhY2NvdW50OiB0aGlzLnR4bi5zZW5kZXIsIGJveEluZGV4OiBib3hJbmRleCwgYXJjOiBhcmMgfQoJdHhuIFNlbmRlcgoJZnJhbWVfZGlnIC0yIC8vIGJveEluZGV4OiB1aW50MTYKCWNvbmNhdAoJc3RvcmUgMTEgLy8gc3RhdGljIGVsZW1lbnRzCglieXRlIDB4MDAyNCAvLyBoZWFkIGVuZAoJc3RvcmUgOCAvLyBkeW5hbWljIGhlYWQKCWludCAzNgoJc3RvcmUgOSAvLyBkeW5hbWljIGhlYWQgb2Zmc2V0CglieXRlIDB4CglzdG9yZSAxMCAvLyBkeW5hbWljIGVsZW1lbnRzCglmcmFtZV9kaWcgLTEgLy8gYXJjOiBieXRlcwoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWxvYWQgMTAgLy8gZHluYW1pYyBlbGVtZW50cwoJc3dhcAoJY29uY2F0CglzdG9yZSAxMCAvLyBkeW5hbWljIGVsZW1lbnRzCglsb2FkIDExIC8vIHN0YXRpYyBlbGVtZW50cwoJbG9hZCA4IC8vIGR5bmFtaWMgaGVhZAoJbG9hZCAxMCAvLyBkeW5hbWljIGVsZW1lbnRzCgljb25jYXQKCWNvbmNhdAoJZnJhbWVfYnVyeSAtNSAvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdAoKCS8vIGV4YW1wbGVzL2FyYzc1L2FyYzc1LmFsZ28udHM6NjEKCS8vIHRoaXMud2hpdGVsaXN0LmRlbGV0ZSh3aGl0ZWxpc3QpCglmcmFtZV9kaWcgLTUgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWJveF9kZWwKCgkvLyBleGFtcGxlcy9hcmM3NS9hcmM3NS5hbGdvLnRzOjYzCgkvLyB0aGlzLndoaXRlbGlzdC5wdXQod2hpdGVsaXN0LCBhcHBJRHMpCglmcmFtZV9kaWcgLTUgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWR1cAoJYm94X2RlbAoJcG9wCglmcmFtZV9kaWcgLTMgLy8gYXBwSURzOiB1aW50NjRbXQoJYm94X3B1dAoKCS8vIGlmMV9jb25kaXRpb24KCS8vIGV4YW1wbGVzL2FyYzc1L2FyYzc1LmFsZ28udHM6NjUKCS8vIHByZU1CUiA+IHRoaXMuYXBwLmFkZHJlc3MubWluQmFsYW5jZQoJZnJhbWVfZGlnIC00IC8vIHByZU1CUjogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCglhc3NlcnQKCWFjY3RfcGFyYW1zX2dldCBBY2N0TWluQmFsYW5jZQoJYXNzZXJ0Cgk+CglieiBpZjFfZWxzZQoKCS8vIGlmMV9jb25zZXF1ZW50CgkvLyBleGFtcGxlcy9hcmM3NS9hcmM3NS5hbGdvLnRzOjY2CgkvLyB0aGlzLnNlbmRNQlJQYXltZW50KHByZU1CUikKCWJ5dGUgMHgKCXBvcAoJZnJhbWVfZGlnIC00IC8vIHByZU1CUjogdWludDY0CgljYWxsc3ViIHNlbmRNQlJQYXltZW50CgliIGlmMV9lbmQKCmlmMV9lbHNlOgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czo2OAoJLy8gdGhpcy52ZXJpZnlNQlJQYXltZW50KHRoaXMudHhuR3JvdXBbdGhpcy50eG4uZ3JvdXBJbmRleCAtIDFdLCBwcmVNQlIpCglieXRlIDB4Cglwb3AKCWZyYW1lX2RpZyAtNCAvLyBwcmVNQlI6IHVpbnQ2NAoJdHhuIEdyb3VwSW5kZXgKCWludCAxCgktCgljYWxsc3ViIHZlcmlmeU1CUlBheW1lbnQKCmlmMV9lbmQ6CglyZXRzdWIKCmFiaV9yb3V0ZV9kZWxldGVXaGl0ZWxpc3Q6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCXR4biBBcHBsaWNhdGlvbklECglpbnQgMAoJIT0KCSYmCglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMQoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJZXh0cmFjdCAyIDAKCWNhbGxzdWIgZGVsZXRlV2hpdGVsaXN0CglpbnQgMQoJcmV0dXJuCgpkZWxldGVXaGl0ZWxpc3Q6Cglwcm90byA0IDAKCgkvLyBleGFtcGxlcy9hcmM3NS9hcmM3NS5hbGdvLnRzOjgwCgkvLyBwcmVNQlIgPSB0aGlzLmFwcC5hZGRyZXNzLm1pbkJhbGFuY2UKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKCWFzc2VydAoJYWNjdF9wYXJhbXNfZ2V0IEFjY3RNaW5CYWxhbmNlCglhc3NlcnQKCWZyYW1lX2J1cnkgLTMgLy8gcHJlTUJSOiB1aW50NjQKCgkvLyBleGFtcGxlcy9hcmM3NS9hcmM3NS5hbGdvLnRzOjgxCgkvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdCA9IHsgYWNjb3VudDogdGhpcy50eG4uc2VuZGVyLCBib3hJbmRleDogYm94SW5kZXgsIGFyYzogYXJjIH0KCXR4biBTZW5kZXIKCWZyYW1lX2RpZyAtMiAvLyBib3hJbmRleDogdWludDE2Cgljb25jYXQKCXN0b3JlIDExIC8vIHN0YXRpYyBlbGVtZW50cwoJYnl0ZSAweDAwMjQgLy8gaGVhZCBlbmQKCXN0b3JlIDggLy8gZHluYW1pYyBoZWFkCglpbnQgMzYKCXN0b3JlIDkgLy8gZHluYW1pYyBoZWFkIG9mZnNldAoJYnl0ZSAweAoJc3RvcmUgMTAgLy8gZHluYW1pYyBlbGVtZW50cwoJZnJhbWVfZGlnIC0xIC8vIGFyYzogYnl0ZXMKCWR1cAoJbGVuCglpdG9iCglleHRyYWN0IDYgMgoJc3dhcAoJY29uY2F0Cglsb2FkIDEwIC8vIGR5bmFtaWMgZWxlbWVudHMKCXN3YXAKCWNvbmNhdAoJc3RvcmUgMTAgLy8gZHluYW1pYyBlbGVtZW50cwoJbG9hZCAxMSAvLyBzdGF0aWMgZWxlbWVudHMKCWxvYWQgOCAvLyBkeW5hbWljIGhlYWQKCWxvYWQgMTAgLy8gZHluYW1pYyBlbGVtZW50cwoJY29uY2F0Cgljb25jYXQKCWZyYW1lX2J1cnkgLTQgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCgkvLyBleGFtcGxlcy9hcmM3NS9hcmM3NS5hbGdvLnRzOjgzCgkvLyB0aGlzLndoaXRlbGlzdC5kZWxldGUod2hpdGVsaXN0KQoJZnJhbWVfZGlnIC00IC8vIHdoaXRlbGlzdDogV2hpdGVsaXN0Cglib3hfZGVsCgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czo4NQoJLy8gdGhpcy5zZW5kTUJSUGF5bWVudChwcmVNQlIpCglieXRlIDB4Cglwb3AKCWZyYW1lX2RpZyAtMyAvLyBwcmVNQlI6IHVpbnQ2NAoJY2FsbHN1YiBzZW5kTUJSUGF5bWVudAoJcmV0c3ViCgphYmlfcm91dGVfZGVsZXRlQXBwRnJvbVdoaXRlbGlzdDoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJdHhuIEFwcGxpY2F0aW9uSUQKCWludCAwCgkhPQoJJiYKCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAyCgl0eG5hIEFwcGxpY2F0aW9uQXJncyA0CglidG9pCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAzCglidG9pCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglleHRyYWN0IDIgMAoJY2FsbHN1YiBkZWxldGVBcHBGcm9tV2hpdGVsaXN0CglpbnQgMQoJcmV0dXJuCgpkZWxldGVBcHBGcm9tV2hpdGVsaXN0OgoJcHJvdG8gNyAwCgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czo5NwoJLy8gcHJlTUJSID0gdGhpcy5hcHAuYWRkcmVzcy5taW5CYWxhbmNlCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCglhc3NlcnQKCWFjY3RfcGFyYW1zX2dldCBBY2N0TWluQmFsYW5jZQoJYXNzZXJ0CglmcmFtZV9idXJ5IC01IC8vIHByZU1CUjogdWludDY0CgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czo5OAoJLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QgPSB7IGFjY291bnQ6IHRoaXMudHhuLnNlbmRlciwgYm94SW5kZXg6IGJveEluZGV4LCBhcmM6IGFyYyB9Cgl0eG4gU2VuZGVyCglmcmFtZV9kaWcgLTIgLy8gYm94SW5kZXg6IHVpbnQxNgoJY29uY2F0CglzdG9yZSAxMSAvLyBzdGF0aWMgZWxlbWVudHMKCWJ5dGUgMHgwMDI0IC8vIGhlYWQgZW5kCglzdG9yZSA4IC8vIGR5bmFtaWMgaGVhZAoJaW50IDM2CglzdG9yZSA5IC8vIGR5bmFtaWMgaGVhZCBvZmZzZXQKCWJ5dGUgMHgKCXN0b3JlIDEwIC8vIGR5bmFtaWMgZWxlbWVudHMKCWZyYW1lX2RpZyAtMSAvLyBhcmM6IGJ5dGVzCglkdXAKCWxlbgoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWNvbmNhdAoJbG9hZCAxMCAvLyBkeW5hbWljIGVsZW1lbnRzCglzd2FwCgljb25jYXQKCXN0b3JlIDEwIC8vIGR5bmFtaWMgZWxlbWVudHMKCWxvYWQgMTEgLy8gc3RhdGljIGVsZW1lbnRzCglsb2FkIDggLy8gZHluYW1pYyBoZWFkCglsb2FkIDEwIC8vIGR5bmFtaWMgZWxlbWVudHMKCWNvbmNhdAoJY29uY2F0CglmcmFtZV9idXJ5IC02IC8vIHdoaXRlbGlzdDogV2hpdGVsaXN0CgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czoxMDAKCS8vIHNwbGljZWQgPSB0aGlzLndoaXRlbGlzdC5nZXQod2hpdGVsaXN0KS5zcGxpY2UoaW5kZXgsIDEpCglmcmFtZV9kaWcgLTYgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWJveF9nZXQKCWFzc2VydAoJaW50IDAKCWV4dHJhY3RfdWludDE2CglpbnQgMQoJLQoJaXRvYgoJZXh0cmFjdCA2IDIKCWZyYW1lX2RpZyAtNCAvLyBpbmRleDogdWludDY0CglpbnQgOAoJKgoJaW50IDIKCSsKCXN0b3JlIDEyIC8vIHNwbGljZSBzdGFydAoJaW50IDEKCWludCA4CgkqCglpbnQgOAoJKwoJc3RvcmUgMTMgLy8gc3BsaWNlIGJ5dGUgbGVuZ3RoCglmcmFtZV9kaWcgLTYgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWJveF9nZXQKCWFzc2VydAoJaW50IDIKCWxvYWQgMTIgLy8gc3BsaWNlIHN0YXJ0CglzdWJzdHJpbmczCglmcmFtZV9kaWcgLTYgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWJveF9nZXQKCWFzc2VydAoJZHVwCglsZW4KCWxvYWQgMTIgLy8gc3BsaWNlIHN0YXJ0Cglsb2FkIDEzIC8vIHNwbGljZSBieXRlIGxlbmd0aAoJKwoJaW50IDgKCS0KCXN3YXAKCXN1YnN0cmluZzMKCWNvbmNhdAoJY29uY2F0CglpbnQgMQoJaXRvYgoJZXh0cmFjdCA2IDIKCWZyYW1lX2RpZyAtNiAvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdAoJYm94X2dldAoJYXNzZXJ0Cglsb2FkIDEyIC8vIHNwbGljZSBzdGFydAoJbG9hZCAxMyAvLyBzcGxpY2UgYnl0ZSBsZW5ndGgKCWludCA4CgktCglleHRyYWN0MwoJY29uY2F0Cglzd2FwCglmcmFtZV9kaWcgLTYgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWR1cAoJYm94X2RlbAoJcG9wCglzd2FwCglib3hfcHV0CglmcmFtZV9idXJ5IC03IC8vIHNwbGljZWQ6IHVpbnQ2NFtdCgoJLy8gZXhhbXBsZXMvYXJjNzUvYXJjNzUuYWxnby50czoxMDIKCS8vIGFzc2VydChzcGxpY2VkWzBdID09PSBhcHBJRCkKCWZyYW1lX2RpZyAtNyAvLyBzcGxpY2VkOiB1aW50NjRbXQoJaW50IDAKCWludCA4CgkqCglpbnQgMgoJKwoJaW50IDgKCWV4dHJhY3QzCglidG9pCglmcmFtZV9kaWcgLTMgLy8gYXBwSUQ6IHVpbnQ2NAoJPT0KCWFzc2VydAoKCS8vIGV4YW1wbGVzL2FyYzc1L2FyYzc1LmFsZ28udHM6MTA0CgkvLyB0aGlzLnNlbmRNQlJQYXltZW50KHByZU1CUikKCWJ5dGUgMHgKCXBvcAoJZnJhbWVfZGlnIC01IC8vIHByZU1CUjogdWludDY0CgljYWxsc3ViIHNlbmRNQlJQYXltZW50CglyZXRzdWIKCm1haW46Cgl0eG4gTnVtQXBwQXJncwoJYm56IHJvdXRlX2FiaQoJdHhuIEFwcGxpY2F0aW9uSUQKCWludCAwCgk9PQoJYm56IGJhcmVfcm91dGVfY3JlYXRlCgpyb3V0ZV9hYmk6CgltZXRob2QgImFkZEFwcFRvV2hpdGVMaXN0KHN0cmluZyx1aW50MTYsdWludDY0LHBheSl2b2lkIgoJbWV0aG9kICJzZXRBcHBXaGl0ZWxpc3Qoc3RyaW5nLHVpbnQxNix1aW50NjRbXSl2b2lkIgoJbWV0aG9kICJkZWxldGVXaGl0ZWxpc3Qoc3RyaW5nLHVpbnQxNil2b2lkIgoJbWV0aG9kICJkZWxldGVBcHBGcm9tV2hpdGVsaXN0KHN0cmluZyx1aW50MTYsdWludDY0LHVpbnQ2NCl2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX2FkZEFwcFRvV2hpdGVMaXN0IGFiaV9yb3V0ZV9zZXRBcHBXaGl0ZWxpc3QgYWJpX3JvdXRlX2RlbGV0ZVdoaXRlbGlzdCBhYmlfcm91dGVfZGVsZXRlQXBwRnJvbVdoaXRlbGlzdA==";
    override clearProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKaW50IDEKcmV0dXJu";
    override methods: algosdk.ABIMethod[] = [
        new algosdk.ABIMethod({ name: "addAppToWhiteList", desc: "", args: [{ type: "string", name: "arc", desc: "" }, { type: "uint16", name: "boxIndex", desc: "" }, { type: "uint64", name: "appID", desc: "" }, { type: "pay", name: "payment", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "setAppWhitelist", desc: "", args: [{ type: "string", name: "arc", desc: "" }, { type: "uint16", name: "boxIndex", desc: "" }, { type: "uint64[]", name: "appIDs", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "deleteWhitelist", desc: "", args: [{ type: "string", name: "arc", desc: "" }, { type: "uint16", name: "boxIndex", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "deleteAppFromWhitelist", desc: "", args: [{ type: "string", name: "arc", desc: "" }, { type: "uint16", name: "boxIndex", desc: "" }, { type: "uint64", name: "appID", desc: "" }, { type: "uint64", name: "index", desc: "" }], returns: { type: "void", desc: "" } })
    ];
    async addAppToWhiteList(args: {
        arc: string;
        boxIndex: bigint;
        appID: bigint;
        payment: algosdk.TransactionWithSigner | algosdk.Transaction;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.addAppToWhiteList({ arc: args.arc, boxIndex: args.boxIndex, appID: args.appID, payment: args.payment }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async setAppWhitelist(args: {
        arc: string;
        boxIndex: bigint;
        appIDs: bigint[];
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.setAppWhitelist({ arc: args.arc, boxIndex: args.boxIndex, appIDs: args.appIDs }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async deleteWhitelist(args: {
        arc: string;
        boxIndex: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.deleteWhitelist({ arc: args.arc, boxIndex: args.boxIndex }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async deleteAppFromWhitelist(args: {
        arc: string;
        boxIndex: bigint;
        appID: bigint;
        index: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.deleteAppFromWhitelist({ arc: args.arc, boxIndex: args.boxIndex, appID: args.appID, index: args.index }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    compose = {
        addAppToWhiteList: async (args: {
            arc: string;
            boxIndex: bigint;
            appID: bigint;
            payment: algosdk.TransactionWithSigner | algosdk.Transaction;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "addAppToWhiteList"), { arc: args.arc, boxIndex: args.boxIndex, appID: args.appID, payment: args.payment }, txnParams, atc);
        },
        setAppWhitelist: async (args: {
            arc: string;
            boxIndex: bigint;
            appIDs: bigint[];
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "setAppWhitelist"), { arc: args.arc, boxIndex: args.boxIndex, appIDs: args.appIDs }, txnParams, atc);
        },
        deleteWhitelist: async (args: {
            arc: string;
            boxIndex: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "deleteWhitelist"), { arc: args.arc, boxIndex: args.boxIndex }, txnParams, atc);
        },
        deleteAppFromWhitelist: async (args: {
            arc: string;
            boxIndex: bigint;
            appID: bigint;
            index: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "deleteAppFromWhitelist"), { arc: args.arc, boxIndex: args.boxIndex, appID: args.appID, index: args.index }, txnParams, atc);
        }
    };
}