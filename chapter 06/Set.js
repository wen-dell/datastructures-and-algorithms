class Set {

    constructor() {
        this.items = {};
    }

    has(value) {
        return value in this.items;
    }

    add(value) {
        if (!this.has(value)) {
            this.items[value] = value;
            return true;
        }
        return false;
    }

    delete(value) {
        if (this.has(value)) {
            delete this.items[value];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    values() {
        let values = [];
        for (let i = 0, keys = Object.keys(this.items); i < keys.length; i++) {
            values.push(this.items[keys[i]]);
        }
        return values;
    }

    union(otherSet) {
        let unionSet = new Set();
        
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    }

    intersection(otherSet) {
        let intersectionSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    difference(otherSet) {
        let differenceSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }

    subset(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            let values = this.values();
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }

}

module.exports = Set;