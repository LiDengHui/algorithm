/**
 * TODO: test
 */
class TreeNode {
    constructor({ id, parentId, data }) {
        this.id = id;
        this.parentId = parentId;
        this.data = data;
        this.children = null;
    }
}

const list = [
    { id: 1001, parentId: 0, data: "AA" },
    { id: 1002, parentId: 1001, data: "BB" },
    { id: 1003, parentId: 1001, data: "CC" },
    { id: 1004, parentId: 1003, data: "DD" },
    { id: 1005, parentId: 1003, data: "EE" },
    { id: 1006, parentId: 1002, data: "FF" },
    { id: 1007, parentId: 1002, data: "GG" },
    { id: 1008, parentId: 1004, data: "HH" },
    { id: 1009, parentId: 1005, data: "II" },
];

function buildTree(list) {
    const map = new Map();
    const root = {};
    list.forEach((e) => map.set(e.id, new TreeNode(e)));
    map.forEach((node, id) => {
        const parent = map.get(node.parentId);
        if (parent) {
            parent.children = parent.children || {};
            parent.children[id] = node;
        } else {
            root[id] = node;
        }
    });
    return root;
}

function printTree(list) {
    const root = buildTree(list);
    preOrderTree(root);
}

function preOrderTree(nodes, deep = 0) {
    Object.values(nodes).forEach(({ data, children }) => {
        console.log("｜--".repeat(deep) + data);
        children && preOrderTree(children, deep + 1);
    });
}
printTree(list);

/*
输出结果
AA
｜--BB
｜--｜--FF
｜--｜--GG
｜--CC
｜--｜--DD
｜--｜--｜--HH
｜--｜--EE
｜--｜--｜--II
*/
