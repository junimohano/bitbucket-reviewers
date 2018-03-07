export abstract class ListBase {
  id: number;
  name: string;

  constructor(init?: ListBase) {
    if (init) {
      this.id = init.id;
      this.name = init.name;
    }
  }
}
