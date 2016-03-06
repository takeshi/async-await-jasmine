# async-await-jasmine

async-await-jasmine is utility for jasmine with async await.

## Installtion

    npm install async-await-jasmine
   
   
### Sample Code

        import {$it} from "async-await-jasmine";

        describe("async-test", () => {

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



## Motivation
Jasmine's async programing paradime is that assetion code call done method if it have done.
But in the case using async await,
assertion code throw exception when promise is rejected.
So it don't call done method.
And we must wait timeout and we get no error message.

### Problem Code

        describe("async-test", () => {

            it("out of zone", async (done) => {
                await async_log("Hellow");
                await async_error("Hell");
                // don't call this method when promise is rejected
                done();
            }, 1000);

        });

        async function async_log(msg: string) {
            console.log("[async] " + msg);
        }

        async function async_error(msg: string) {
            await async_log(msg);
            // Promise is rejected 
            throw new Error(msg);
        }

### Solution
async-await-jasmine uses [zone.js](https://github.com/angular/zone.js/).

zone.js can handle async error even if code is in zone. 
so when assetion code throw exception, async-await-jasmine automatically call fail and done metod.
Then we need not wait timeout and we get error message;