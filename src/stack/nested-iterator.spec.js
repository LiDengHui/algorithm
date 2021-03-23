import { NestedIterator } from "./nested-iterator";

describe("nested-iterator", () => {
    it("should be return [1,1,2,1,1]", () => {
        const arr = [[1, 1], 2, [1, 1]];

        const list = createNestedList(arr);

        const nestedIterator = new NestedIterator(list);

        expect(nestedIterator.hasNext()).toBe(true);
        expect(nestedIterator.next()).toBe(1);
    });

    it("should be return [1,4,6]", () => {
        const arr = [1, [4, [6]]];
        const list = createNestedList(arr);
        const nestedIterator = new NestedIterator(list);

        const target = getNestedArray(nestedIterator);

        expect(target).toStrictEqual([1, 4, 6]);
    });
});

class NestedInteger {
    constructor(value) {
        this.value = value;
    }
    isInteger() {
        return typeof this.value === "number";
    }
    getInteger() {
        if (this.isInteger()) {
            return this.value;
        }
        return null;
    }
    getList() {
        if (!this.isInteger()) return this.value;
        return null;
    }
}

function createNestedList(arr) {
    return arr.reduce((current, item) => {
        if (Array.isArray(item)) {
            current.push(new NestedInteger(createNestedList(item)));
        } else {
            current.push(new NestedInteger(item));
        }
        return current;
    }, []);
}

function getNestedArray(nestedIterator) {
    const arr = [];

    while (nestedIterator.hasNext()) {
        arr.push(nestedIterator.next());
    }

    return arr;
}
