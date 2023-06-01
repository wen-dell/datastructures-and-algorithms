class ArrayList {

    constructor() {
        this.array = [];
    }

    insert(item) {
        this.array.push(item);
    }

    bubbleSort() {
        debugger;
        const length = this.array.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    this.swap(j, j+1);
                }
            }
        }
    }

    modifiedBubbleSort() {
        debugger;
        const length = this.array.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    this.swap(j, j + 1);
                }
            }
        }
    }

    selectionSort() {
        debugger;
        const length = this.array.length;
        let indexMin;
        for (let i = 0; i < length - 1; i++) {
            indexMin = i;
            for (let j = i; j < length; j++) {
                if (this.array[indexMin] > this.array[j]) {
                    indexMin = j;
                }
            }
            if (i !== indexMin) {
                this.swap(i, indexMin);
            }
        }
    }

    insertionSort() {
        debugger;
        const length = this.array.length;
        let j;
        let temp;
        for (let i = 1; i < length; i++) {
            j = i;
            temp = this.array[i];
            while (j > 0 && this.array[j - 1] > temp) {
                this.array[j] = this.array[j - 1];
                j--;
            }
            this.array[j] = temp;
        }
    }

    swap(index1, index2) {
        let aux = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = aux;
    }

    toString() {
        return this.array.join();
    }

}

module.exports = ArrayList;