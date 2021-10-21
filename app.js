const Node = require("./index")

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(a);


// depth-first traversal - most likely to be solved using a stack data structure
// Time space complexity --- n = number of nodes, t = o(n) space = o(n) --- this is because we are only visiting the node once

// Linear way

const depFirst = (root) => {
    const result = []
    const stack = [root]
    while (stack.length > 0) {
        const current = stack.pop()
        result.push(current.val)

        if (current.right) {
            stack.push(current.right)
        }
        if (current.left) {
            stack.push(current.left)
        }
    }
    console.log(result);
}
depFirst(a)

// Breadth - first search

const depFirst = (root) => {
    const result = []
    const queue = [root]

    while (queue.length > 0) {
        const current = queue.shift()
        result.push(current.val)

        if (current.left) {
            queue.push(current.left)
        }
        if (current.right) {
            queue.push(current.right)
        }
    }
    console.log(result);
    if (result.includes("e")) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
depFirst(a)

// Looking for a value in a binary tree

const depFirst = (root) => {
    const result = []
    const queue = [root]

    while (queue.length > 0) {
        const current = queue.shift()
        result.push(current.val)

        if (current.left) {
            queue.push(current.left)
        }
        if (current.right) {
            queue.push(current.right)
        }
    }
    console.log(result);
    if (result.includes("e")) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
depFirst(a)
