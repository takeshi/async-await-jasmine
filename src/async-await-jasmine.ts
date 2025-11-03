require("zone.js");

function createZone(zoneName: string, done: () => void) {
    return Zone.current.fork({
        name: zoneName,
        onHandleError: function (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, error: any) {
            fail(error);
            done();
            return true;
        }
    })
}

function inZone(done: () => void, zoneName: string, action: () => Promise<void>) {

    createZone(zoneName, done).run(async function () {
        let result = await action();
        done();
        return result;
    });

}

export function $beforeEach(action: () => Promise<void>, timeout?: number) {
    beforeEach(function (done) {
        inZone(done, "beforeEach", action);
    }, timeout);
}

export function $beforeAll(action: () => Promise<void>, timeout?: number) {
    beforeAll(function (done) {
        inZone(done, "beforeAll", action);
    }, timeout);
}


export function $afterEach(action: () => Promise<void>, timeout?: number) {
    afterEach(function (done) {
        inZone(done, "afterEach", action);
    }, timeout);
}

export function $afterAll(action: () => Promise<void>, timeout?: number) {
    afterAll(function (done) {
        inZone(done, "afterAll", action);
    }, timeout);
}

export function $it(expectation: string, assertion: () => Promise<void>, timeout?: number) {
    it(expectation, function (done) {
        inZone(done, expectation, assertion);
    }, timeout);
}