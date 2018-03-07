import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Group } from './../models/group.model';
import { GroupService } from './group.service';

@Injectable()
export class GroupListResolver implements Resolve<Group[]>  {
  constructor(private groupService: GroupService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Group[]> {
    return this.groupService.getGroups();
  }
}
