import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { SharedService } from '../../../shared/services/shared.service';
import { GroupService } from '../services/group.service';
import { Group } from './../models/group.model';
import { Member } from './../models/member.model';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDetailComponent implements OnInit, OnDestroy {
  group: Group;
  member = new Member();
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private isNew = false;

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private groupService: GroupService,
    private sharedService: SharedService) {
    this.sharedService.showInfoIcon.next(true);
  }

  ngOnInit() {
    const groupDetail = this.activatedRoute.snapshot.data['groupDetail'];
    if (groupDetail) {
      this.group = groupDetail;
    } else {
      this.group = new Group();
      this.isNew = true;
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSave() {
    let observable: Observable<boolean>;
    if (this.isNew) {
      observable = this.groupService.addGroup(this.group);
    } else {
      observable = this.groupService.updateGroup(this.group);
    }

    observable.takeUntil(this.ngUnsubscribe)
      .subscribe(result => this.router.navigate(['groups']));
  }

  onBack() {
    this.location.back();
  }

  onAddMember() {
    this.member.id = this.group.members.length === 0 ? 1 : Math.max(...this.group.members.map(g => g.id)) + 1;
    this.group.members.push(Object.assign({}, this.member));
    this.group.members = [...this.group.members];
    this.member = new Member();
  }

  onRemoveMember(id: number) {
    this.group.members = this.group.members.filter(m => m.id !== id);
  }
}
