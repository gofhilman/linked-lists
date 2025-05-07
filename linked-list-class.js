import Node from "./node-class.js";

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const lastNode = new Node();
        lastNode.value = value;
        if(!this.head) {
            this.head = lastNode;
        } else {
            let node = this.head;
            while(node.nextNode) {
                node = node.nextNode;
            }
            node.nextNode = lastNode;
        }
    }

    prepend(value) {
        const firstNode = new Node();
        firstNode.value = value;
        firstNode.nextNode = this.head;
        this.head = firstNode;
    }

    size() {
        let sizeCounter = 0;
        let node = this.head;
        while(node) {
            sizeCounter++;
            node = node.nextNode;
        }
        return sizeCounter;
    }

    
}

export default LinkedList;