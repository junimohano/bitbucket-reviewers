import { ListBase } from '../../../shared/components/list';
import { Member } from './member.model';

export class Group extends ListBase {
  members: Array<Member>;

  constructor(init?: Group) {
    super(init);

    this.members = init ? init.members : new Array<Member>();
  }
}
