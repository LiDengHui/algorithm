export default class HashTable {
    constructor() {
        this.table = new Array(137);
        this.buildChains();
    }

    put(key, data) {
        const pos = this.betterHash(key);
        let index = 0;

        while (this.table[pos][index] != undefined) {
            index = index + 2;
        }
        this.table[pos][index] = key;
        this.table[pos][index + 1] = data;
    }

    betterHash(data) {
        const H = 31;
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += H * total + data.charCodeAt(i);
        }

        total = total % this.table.length;

        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }

    get(key) {
        let index = 0;
        const pos = this.betterHash(key);

        while (this.table[pos][index] && this.table[pos][index] != key) {
            index += 2;
        }

        return this.table[pos][index + 1];
    }

    buildChains() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array();
        }
    }
}
