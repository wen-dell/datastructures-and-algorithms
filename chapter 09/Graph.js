const Dictionary = require('../chapter 07/Dictionary');
const Queue = require('../chapter 04/Queue');

class Graph {

    constructor() {
        this.vertices = [];
        this.adjList = new Dictionary();
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + ' -> ';
            let neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }

    initializeColor() {
        let color = [];
        for (let i = 0; i < this.vertices.length; i++) {
            color[this.vertices[i]] = 'white';
        }
        return color;
    }

    bfs(v, callback) {
        let color = this.initializeColor();
        let queue = new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()) {
            let u = queue.dequeue();
            let neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    }

    dfs(callback) {
        let color = this.initializeColor();

        for (let i = 0; i < this.vertices.length; i++) {
            if (color[this.vertices[i]] === 'white') {
                this.dfsVisit(this.vertices[i], color, callback);        
            }
        }
    }

    dfsVisit(u, color, callback) {
        color[u] = 'grey';
        if (callback) {
            callback(u);
        }

        let neighbors = this.adjList.get(u);
        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] === 'white') {
                this.dfsVisit(w, color, callback);
            }
        }
        color[u] = 'black';
    }

}

module.exports = Graph;