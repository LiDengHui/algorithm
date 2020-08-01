import { fibonacci3 } from "@/exercise/fibonacci.js";
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

    show() {
        const arr = preOrderShowNode(this.root);
        const maxHeight = Math.max(...arr.map((e) => e.h));

        const map = {};
        arr.forEach((e) => {
            map[e.deep] = map[e.deep] || [];
            map[e.deep].push(e);
        });
        const t = Object.keys(map)
            .sort((a, b) => a - b)
            .forEach((e) => {
                const str1 = map[e].reduce((str, m) => {
                    return str + "♦️".repeat(m.w * 5) + m.node.data;
                }, "");
                // console.log(str1);
            });
    }
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }

    if (data == node.data) {
        if (node.left == null && node.left == null) {
            return null;
        }
        if (node.left == null) {
            return node.right;
        }

        if (node.right == null) {
            return node.left;
        }

        tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
    } else if (data > node.data) {
        node.right = removeNode(node.right, data);
    } else {
        node.left = removeNode(node.left, data);
    }

    return node;
}

function getSmallest(node) {
    while (temp.left) {
        temp = temp.left;
    }
    return temp;
}
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

export function getHeight(node, parentHeight = 0) {
    if (node == null) {
        return 0;
    }
    if (node.left == null && node.left == null) {
        return 1;
    } else if (node.left == null) {
        return getHeight(node.right) + 1;
    } else if (node.right == null) {
        return getHeight(node.left) + 1;
    } else {
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    }
}

export function preOrderShowNode(node, deep = 0, preWidth = 0, arr = []) {
    if (!(node == null)) {
        const t = showNode(node, arr, preWidth, deep);
        deep++;
        preOrderShowNode(node.left, deep, preWidth, arr);
        preOrderShowNode(node.right, deep, preWidth + t, arr);
    }

    return arr;
}

export function showNode(node, arr, preWidth, deep) {
    let w = 0;
    let h = 0;
    if (node !== null) {
        h = getHeight(node);
        w = fibonacci3(h);
        arr.push({
            h,
            deep,
            w: w + preWidth,
            node,
        });
    }
    return w;
}
