export interface GetItemFromArray {
  get: (index: number) => any;
}

export interface SetItemToArray {
  push: (value: any) => number;
}

export interface RemoveItemFromArray {
  pop: (index: number) => any;
  remove: (index: number) => any;
}
