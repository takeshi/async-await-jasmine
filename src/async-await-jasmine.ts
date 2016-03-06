/// <reference path="../typings/tsd.d.ts" />

require("zone.js");

function createZone(zoneName: string, done: () => void) {
    return Zone.current.fork({
        name: zoneName,
        onHandleError: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, error: any) => {
            fail(error);
            done();
            return true;
        }
    })
}

function inZone(done: () => void, zoneName: string, action: () => Promise<void>) {

    createZone(zoneName, done).run(async () => {
        let result = await action();
        done();
        return result;
    });

}

export function $beforeEach(action: () => Promise<void>, timeout?: number) {
    beforeEach((done) => {
        inZone(done, "beforeEach", action);
    }, timeout);
}

export function $beforeAll(action: () => Promise<void>, timeout?: number) {
    beforeAll((done) => {
        inZone(done, "beforeEach", action);
    }, timeout);
}


export function $afterEach(action: () => Promise<void>, timeout?: number) {
    afterEach((done) => {
        inZone(done, "beforeEach", action);
    }, timeout);
}

export function $afterAll(action: () => Promise<void>, timeout?: number) {
    afterAll((done) => {
        inZone(done, "beforeEach", action);
    }, timeout);
}

export function $it(expectation: string, assertion: () => Promise<void>, timeout?: number) {
    it(expectation, (done) => {
        inZone(done, expectation, assertion);
    }, timeout);
}