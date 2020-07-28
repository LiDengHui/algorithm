class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const n = new Node(data, null, null);

        if (this.root == null) {
            this.root = n;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;

                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    getMin() {
        let current = this.root;
        while (!(current.left == null)) {
            current = current.left;
        }
        return current.data;
    }

    getMax() {
        let current = this.root;
        while (!(current.right == null)) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (!(current == null)) {
            if (current.data == data) {
                return current;
            } else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return null;
    }

    remove(data) {
        this.root = removeNode(this.root, data);
    }
}

function removeNode(node, data) {}
/**
 * 中序遍历
 * @param {*} node
 * @param {*} ary
 */
export function inOrder(node, ary) {
    if (!(node == null)) {
        inOrder(node.left, ary);
        ary.push(node.data);
        inOrder(node.right, ary);
    }
}
/**
 * 先序遍历
 * @param {*} node
 * @param {*} ary
 */
export function preOrder(node, ary) {
    if (!(node == null)) {
        ary.push(node.data);
        preOrder(node.left, ary);
        preOrder(node.right, ary);
    }
}
/**
 * 后序遍历
 * @param {*} node
 * @param {*} ary
 */
export function postOrder(node, ary) {
    if (!(node == null)) {
        postOrder(node.left, ary);
        postOrder(node.right, ary);
        ary.push(node.data);
    }
}
