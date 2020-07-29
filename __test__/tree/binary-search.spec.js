import BinarySearchTree, {
    inOrder,
    preOrder,
    postOrder,
    getHeight,
    getWidth,
} from "@/tree/binary-search";

describe("BinarySearchTree", () => {
    const binarySearchTree = new BinarySearchTree();
    const nums = [23, 45, 16, 37, 3, 99, 22, 10, 20, 30];

    for (let i = 0; i < nums.length; i++) {
        binarySearchTree.insert(nums[i]);
    }

    binarySearchTree.show();

    it("getMin", () => {
        expect(binarySearchTree.getMin()).toBe(3);
    });

    it("getMax", () => {
        binarySearchTree;
        expect(binarySearchTree.getMax()).toBe(99);
    });

    it("find", () => {
        const f = binarySearchTree.find(10);
        expect(f.data).toBe(10);
    });

    it("remove 22", () => {
        let f = binarySearchTree.find(22);
        expect(f.data).toBe(22);
        binarySearchTree.remove(22);
        expect(f).toBeFalsy;
    });
});

describe("遍历", () => {
    const binarySearchTree = new BinarySearchTree();
    const nums = [23, 45, 16, 37, 3, 99, 22];

    for (let i = 0; i < nums.length; i++) {
        binarySearchTree.insert(nums[i]);
    }

    it("中序遍历", () => {
        const ary = [];
        inOrder(binarySearchTree.root, ary);
        expect(ary).toEqual([3, 16, 22, 23, 37, 45, 99]);
    });

    it("先序遍历", () => {
        const ary = [];
        preOrder(binarySearchTree.root, ary);
        expect(ary).toEqual([23, 16, 3, 22, 45, 37, 99]);
    });

    it("后序遍历", () => {
        const ary = [];
        postOrder(binarySearchTree.root, ary);
        expect(ary).toEqual([3, 22, 16, 37, 99, 45, 23]);
    });
});
