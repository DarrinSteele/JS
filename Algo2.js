// #1
function reveserseLinkedList(sll) {
    var runner = this.head;
    var prev;
    while (runner.next != null) {
        var temp = node.next;
        prev = runner.next;
        runner = runner.next;
        runner.next = prev;
    }
    return sll;
}

//#2
function rFactorial(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * rFactorial(num--);
    }
}

//3
//a)Forward Progress is the the property that provides change whether positive or negative so we don't create an infinite loop
//b)Base Case is where once met the loop breaks
//c)Recursive Call is where the function is recalled within the function

//4

function BSTNode(Val) {
    this.left;
    this.right;
    this.val = val;
}

function BST() {
    this.root = null;
}
this.add = function(val) {
    var currentNode = root;
    var newNode = new BSTNode(val);
    while (currentNode) {
        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            }
        }
    }
}
this.size = function() {
    if (BSTNode) {
        return 1 + size(BSTNode.left) + size(BSTNode.right);
    }
}

//6

function rFibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return rFibonacci(num - 2) + rFibonacci(num - 1);
}

//7

function rListLength(node) {
    var count;
    if (!node) {
        return 0;
    } else {
        count++;
        return rListLength(node.next);
    }
}