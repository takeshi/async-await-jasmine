var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
describe("async-test out of zone", () => {
    it("out of zone", (done) => __awaiter(this, void 0, void 0, function* () {
        yield async_log("Hellow");
        yield async_error("Hell");
        done();
    }), 1000);
});
function async_log(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("[async] " + msg);
    });
}
function async_error(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        yield async_log(msg);
        throw new Error(msg);
    });
}
