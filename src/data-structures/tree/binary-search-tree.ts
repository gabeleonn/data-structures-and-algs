import { Node } from '../node/node';
import { Insert, Search } from './types';

export class BinarySearchTree implements Insert, Search {
  public root: Node | null = null;

  insert(value: any): any {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value: any): Node | null {
    if (!this.root) {
      return null;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else {
          return currentNode;
        }
      }
      return null;
    }
  }

  toString(): string {
    if (this.root) {
      return this.traverse(this.root);
    } else {
      return 'Tree is empty';
    }
  }

  traverse(node: Node): any {
    const tree: Node = { ...node };
    tree.left = node.left === null ? null : this.traverse(node.left);
    tree.right = node.right === null ? null : this.traverse(node.right);
    return tree;
  }
}
