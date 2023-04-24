class Node {
    
    constructor(element) {
        this.element = element;
        this.next = null;
    }

}

class LinkedList {

    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(element) {
        let node = new Node(element);
        let current = null;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.length++;
    }

    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            let node = new Node(element);
            let current = this.head;
            let previous = null;
            let index = 0;

            if (position === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }
    }
    
    removeAt(position) {
        if (position > -1 && position < this.length) {
            let current = this.head;
            let previous = null;
            let index = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }
            this.length--;
            return current.element;
        } else {
            return null;
        }
    }

    remove(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    
    indexOf(element) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    toString() {
        let current = this.head;
        let string = '';
        
        while (current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next;
        }

        return string;
    }

    getHead() {
        return this.head;
    }

}

module.exports = LinkedList;