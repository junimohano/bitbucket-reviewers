import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoComponent, InfoModule } from './shared/components/info';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'groups',
    pathMatch: 'prefix'
  },
  {
    path: '',
    component: InfoComponent,
    outlet: 'info'
  },
  {
    path: 'groups',
    loadChildren: './browser-action/groups/groups.module#GroupsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    InfoModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
