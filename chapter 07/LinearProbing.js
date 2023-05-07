class ValuePair {
    
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return '[' + this.key + ' - ' + this.value + ']';
    }

}

class HashTable {

    constructor() {
        this.table = [];
    }

    put(key, value) {
        let position = this.loseloseHashCode(key);
        if (this.table[position] == undefined) {
            this.table[position] = new ValuePair(key, value);
        } else {
            let index = ++position;
            while (this.table[index] != undefined) {
                index++;
            }
            this.table[index] = new ValuePair(key, value);
        }
    }

    get(key) {
        let position = this.loseloseHashCode(key);

        if (this.table[position] != undefined) {
            if (this.table[position].key === key) {
                return this.table[position].value;
            } else {
                let index = ++position;
                while (this.table[index] !== undefined &&
                      (this.table[index] && this.table[index].key !== key)) {
                    index++;
                }
                if (this.table[index] && this.table[index].key === key) {
                    return this.table[index].value;
                }
            }
        }
        return undefined;
    }

    remove(key) {
        let position = this.loseloseHashCode(key);

        if (this.table[position] != undefined) {
            if (this.table[position].key === key) {
                this.table[position] = undefined;
            } else {
                let index = ++position;
                while (this.table[index] !== undefined &&
                      (this.table[index] && this.table[index].key !== key)) {
                    index++;
                }
                if (this.table[index] && this.table[index].key === key) {
                    this.table[index] = undefined;
                }
            }
        }
        return undefined;
    }

    loseloseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

}

module.exports = HashTable;