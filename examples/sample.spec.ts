describe("async-test out of zone", () => {

    it("out of zone", async (done) => {
        await async_log("Hellow");
        await async_error("Hell");
        done();
    }, 1000);

});

async function async_log(msg: string) {
    console.log("[async] " + msg);
}

async function async_error(msg: string) {
    await async_log(msg);
    throw new Error(msg);
}
