"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const async_await_jasmine_1 = require("../src/async-await-jasmine");
describe("async-test in zone", () => {
    async_await_jasmine_1.$it("in zone", () => __awaiter(this, void 0, void 0, function* () {
        yield async_log("Hellow");
        yield async_error("Hell");
    }));
});
function async_log(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("[async] " + msg);
    });
}
function async_error(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        yield async_log("[async] " + msg);
        throw new Error(msg);
    });
}
