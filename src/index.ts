import { BinarySearchTree } from './data-structures/tree/binary-search-tree';

const tree = new BinarySearchTree();

console.log(tree.toString());
tree.insert(19);
tree.insert(2);
tree.insert(100);
tree.insert(10);
console.log(tree.toString());
console.log(tree.search(100));
