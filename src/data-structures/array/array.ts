import { GetItemFromArray, RemoveItemFromArray, SetItemToArray } from './types';

export class MyArray
  implements GetItemFromArray, SetItemToArray, RemoveItemFromArray
{
  private length = 0;
  private data: any = {};

  get(index: number): any {
    const result = this.data[index];

    if (!result) {
      return -1;
    }

    return result;
  }

  push(value: any): number {
    const index = this.length;
    this.length++;
    this.data[index] = value;
    return index;
  }

  pop(): any {
    const removed = this.get(this.length - 1);
    delete this.data[this.length - 1];
    this.length--;
    return removed;
  }

  remove(index: number): any {
    const removed = this.get(index);
    if (!removed) {
      return false;
    }

    this.shift(index);

    return removed;
  }

  private shift(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
