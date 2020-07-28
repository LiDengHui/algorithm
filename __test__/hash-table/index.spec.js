import HashTable from "@/hash-table";

describe("HashTable", () => {
    const someNames = [
        "David",
        "Jennifer",
        "Donnie",
        "Raymond",
        "Cynthia",
        "Mike",
        "Clayton",
        "Danny",
        "Jonathan",
    ];

    const hashTable = new HashTable();

    for (let i = 0; i < someNames.length; i++) {
        hashTable.put(someNames[i], someNames[i]);
    }

    it("get David", () => {
        hashTable;
        expect(hashTable.get("David")).toBe("David");
    });
});
