import 'rxjs/add/operator/takeUntil';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { SharedService } from '../../../shared/services/shared.service';
import { Group } from '../models/group.model';
import { GroupService } from './../services/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupListComponent implements OnInit, OnDestroy {
  groups: Group[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private sharedService: SharedService) {
    this.sharedService.showInfoIcon.next(false);
  }

  ngOnInit() {
    this.groups = this.activatedRoute.snapshot.data['groupList'];
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onGoToDetail(id: number) {
    if (id) {
      this.router.navigate(['groups', id, 'detail']);
    } else {
      this.router.navigate(['groups', 'new']);
    }
  }

  onRemoveGroup(id: number) {
    this.groupService.removeGroup(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(result => {
        this.groups = this.groups.filter(g => g.id !== id);
        this.cdr.detectChanges();
      });
  }
}
