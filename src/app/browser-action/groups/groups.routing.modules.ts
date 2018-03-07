import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailResolver } from './services/group-detail.resolver';
import { GroupListResolver } from './services/group-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: GroupListComponent,
    resolve: {
      groupList: GroupListResolver
    }
  },
  {
    path: ':id/detail',
    component: GroupDetailComponent,
    resolve: {
      groupDetail: GroupDetailResolver
    }
  },
  {
    path: 'new',
    component: GroupDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class GroupsRoutingModule { }
