/// <reference path="../typings/tsd.d.ts" />
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
require("zone.js");
function createZone(zoneName, done) {
    return Zone.current.fork({
        name: zoneName,
        onHandleError: (parentZoneDelegate, currentZone, targetZone, error) => {
            fail(error);
            done();
            return true;
        }
    });
}
function inZone(done, zoneName, action) {
    createZone(zoneName, done).run(() => __awaiter(this, void 0, void 0, function* () {
        let result = yield action();
        done();
        return result;
    }));
}
function $beforeEach(action, timeout) {
    beforeEach((done) => {
        inZone(done, "beforeEach", action);
    }, timeout);
}
exports.$beforeEach = $beforeEach;
function $beforeAll(action, timeout) {
    beforeAll((done) => {
        inZone(done, "beforeEach", action);
    }, timeout);
}
exports.$beforeAll = $beforeAll;
function $afterEach(action, timeout) {
    afterEach((done) => {
        inZone(done, "beforeEach", action);
    }, timeout);
}
exports.$afterEach = $afterEach;
function $afterAll(action, timeout) {
    afterAll((done) => {
        inZone(done, "beforeEach", action);
    }, timeout);
}
exports.$afterAll = $afterAll;
function $it(expectation, assertion, timeout) {
    it(expectation, (done) => {
        inZone(done, expectation, assertion);
    }, timeout);
}
exports.$it = $it;
