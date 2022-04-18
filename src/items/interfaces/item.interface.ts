export interface Item {
  //we add a question mark to mark this as optional because it gets included by the database automatically.
  id?: string;
  name: string;
  desctiption?: string;
  qty: number;
}
