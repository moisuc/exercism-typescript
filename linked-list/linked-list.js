"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null;
        this.data = data;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.head = null;
    }
    LinkedList.prototype.push = function (element) {
        if (this.head === null) {
            this.head = new Node(element);
        }
        else {
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new Node(element);
        }
    };
    LinkedList.prototype.pop = function () {
        if (this.head === null) {
            throw new Error("Cannot pop from an empty list");
        }
        if (this.head.next == null) {
            var current_1 = this.head;
            this.head = null;
            return current_1.data;
        }
        var current = this.head;
        var previous = current;
        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return current.data;
    };
    LinkedList.prototype.shift = function () {
        if (this.head === null) {
            throw new Error("Cannot pop from an empty list");
        }
        if (this.head.next == null) {
            var current_2 = this.head;
            this.head = null;
            return current_2.data;
        }
        var current = this.head;
        this.head = current.next;
        return current.data;
    };
    LinkedList.prototype.unshift = function (element) {
        var current = this.head;
        this.head = new Node(element);
        this.head.next = current;
    };
    LinkedList.prototype.delete = function (element) {
        if (this.head === null) {
            throw new Error("Cannot delete from an empty list");
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        var previous = current;
        while (current.next !== null) {
            if (current.data === element) {
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
        }
    };
    LinkedList.prototype.count = function () {
        var current = this.head;
        var count = 0;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var list = new LinkedList();
list.push(10);
list.pop();
list.unshift(20);
console.log(list);
console.log(list.count());
