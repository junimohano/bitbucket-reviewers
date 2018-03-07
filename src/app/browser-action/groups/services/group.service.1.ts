// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

// import { ChromeStorageService } from '../../../shared/services/chrome-storage';
// import { Group } from './../models/group.model';

// @Injectable()
// export class GroupService {
//   constructor(private chromeStorageService: ChromeStorageService) { }

//   addGroup(group: Group): Observable<boolean> {
//     return Observable.create(observer => {
//       this.getGroups().subscribe(groups => {
//         const newIndex = groups.length === 0 ? 1 : Math.max(...groups.map(g => g.id)) + 1;
//         group.id = newIndex;
//         groups.push(group);
//         this.chromeStorageService.setValue({ groups: groups })
//           .subscribe(result => {
//             observer.next(result);
//             observer.complete();
//           });
//       });
//     });
//   }

//   getGroups(): Observable<Group[]> {
//     return Observable.create(observer => {
//       return this.chromeStorageService.getValue('groups')
//         .subscribe(result => {
//           observer.next(result.groups ? result.groups : []);
//           observer.complete();
//         });
//     });
//   }

//   getGroup(id: number): Observable<Group> {
//     return Observable.create(observer => {
//       this.getGroups().subscribe(groups => {
//         const group = groups.find(g => g.id === id);
//         observer.next(group ? group : null);
//         observer.complete();
//       });
//     });
//   }

//   removeGroup(id: number): Observable<boolean> {
//     return Observable.create((observer) => {
//       this.getGroups().subscribe(groups => {
//         const tempGroups = groups.filter(g => g.id !== id);
//         this.chromeStorageService.setValue({ groups: tempGroups })
//           .subscribe(result => {
//             observer.next(result);
//             observer.complete();
//           });
//       });
//     });
//   }

//   updateGroup(group: Group): Observable<boolean> {
//     return Observable.create(observer => {
//       this.getGroups().subscribe(groups => {
//         const tempGroup = groups.find(g => g.id === group.id);
//         tempGroup.name = group.name;
//         this.chromeStorageService.setValue({ groups: groups })
//           .subscribe(result => {
//             observer.next(result);
//             observer.complete();
//           });
//       });
//     });
//   }
// }
