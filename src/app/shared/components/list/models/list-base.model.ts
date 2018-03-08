export abstract class ListBase {
  id: number;
  name: string;
  userName: string;

  constructor(init?: ListBase) {
    if (init) {
      this.id = init.id;
      this.name = init.name;
      this.userName = init.userName;
    }
  }
}
