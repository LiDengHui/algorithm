import { exchange1, exchange2, exchange3 } from "@/exercise/exchange.js";

describe("exchange", () => {
    [exchange1, exchange2, exchange3].forEach((exchange) => {
        it("nums = [1,2,3,4]", () => {
            const nums = [1, 2, 3, 4];
            expect(exchange(nums)).toStrictEqual([1, 3, 2, 4]);
        });
    });
});
