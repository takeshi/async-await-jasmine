/// <reference path="../../typings/tsd.d.ts" />
export declare function $beforeEach(action: () => Promise<void>, timeout?: number): void;
export declare function $beforeAll(action: () => Promise<void>, timeout?: number): void;
export declare function $afterEach(action: () => Promise<void>, timeout?: number): void;
export declare function $afterAll(action: () => Promise<void>, timeout?: number): void;
export declare function $it(expectation: string, assertion: () => Promise<void>, timeout?: number): void;
