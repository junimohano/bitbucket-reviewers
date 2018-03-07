import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';

import { BrowserStorageService } from '../../../shared/services/browser-storage';
import { Group } from './../models/group.model';

@Injectable()
export class GroupService {
  constructor(private browserStorageService: BrowserStorageService) { }

  addGroup(group: Group): Observable<boolean> {
    return this.getGroups().pipe(
      switchMap(groups => {
        const newIndex = groups.length === 0 ? 1 : Math.max(...groups.map(g => g.id)) + 1;
        group.id = newIndex;
        groups.push(group);

        return this.browserStorageService.setValue({ groups: groups });
      })
    );
  }

  getGroups(): Observable<Group[]> {
    return this.browserStorageService.getValue('groups').pipe(
      map(g => g.groups ? g.groups : [])
    );
  }

  getGroup(id: number): Observable<Group> {
    return this.getGroups().pipe(
      map(groups => groups.find(group => group.id === id))
    );
  }

  removeGroup(id: number): Observable<boolean> {
    return this.getGroups().pipe(
      map(groups => groups.filter(g => g.id !== id)),
      switchMap(groups => {
        const tempGroups = groups.filter(g => g.id !== id);
        return this.browserStorageService.setValue({ groups: tempGroups });
      })
    );
  }

  updateGroup(group: Group): Observable<boolean> {
    return this.getGroups().pipe(
      map(groups => {
        const tempGroup = groups.find(g => g.id === group.id);
        tempGroup.name = group.name;
        tempGroup.members = group.members;
        return groups;
      }),
      switchMap(groups => this.browserStorageService.setValue({ groups: groups }))
    );
  }
}
