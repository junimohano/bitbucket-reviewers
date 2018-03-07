import { ListBase } from '../../../shared/components/list';

export class Member extends ListBase {
  userName: string;

  constructor(init?: Member) {
    super(init);

    if (init) {
      this.userName = init.userName;
    }
  }
}
