import { Node } from '../node/node';

export interface Search {
  search: (value: any) => Node | null;
}

export interface Insert {
  insert: (value: any) => void;
}

export interface Remove {
  remove: (value: any) => Node | boolean;
}
