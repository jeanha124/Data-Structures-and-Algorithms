// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;
        let curr = this.head,
            newTail = curr;

        while (curr.next) {
            newTail = curr;
            curr = curr.next;
        }    
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return curr;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;
        const curr = this.head;
        this.head = curr.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        return curr;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let curr = this.head;
        while (curr) {
            if (curr.value === target) return true;
            curr = curr.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index > this.length) return null;
        let count = 0, curr = this.head;
        while (count !== index){
            curr = curr.next;
            count++;
        }
        return curr;
    }

    // TODO: Implement the set method here
    set(index, val) {
        const found = this.get(index);
        if (found) {
            found.value = val;
            return true;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) return !!this.addToTail(val);
        if (index === 0) return !!this.addToHead(val);

        const insertNode = new Node(val);
        const prev = this.get(index-1);
        const temp = prev.next;
        prev.next = insertNode;
        insertNode.next = temp;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 9) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();

        const prevNode = this.get(index-1);
        const remove = prevNode.next;
        prevNode.next = remove.next;
        this.length--;
        return remove;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
