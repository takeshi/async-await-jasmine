import {$it} from "../src/async-await-jasmine";


describe("async-test in zone", () => {

    $it("in zone", async () => {
        await async_log("Hellow");
        await async_error("Hell");
    });

});

async function async_log(msg: string) {
    console.log("[async] " + msg);
}

async function async_error(msg: string) {
    await async_log("[async] " + msg);
    throw new Error(msg);
}
