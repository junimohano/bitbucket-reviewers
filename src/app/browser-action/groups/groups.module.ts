import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { ListModule } from '../../shared/components/list';
import { BrowserStorageModule } from '../../shared/services/browser-storage';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupsRoutingModule } from './groups.routing.modules';
import { GroupDetailResolver } from './services/group-detail.resolver';
import { GroupListResolver } from './services/group-list.resolver';
import { GroupService } from './services/group.service';

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ListModule,
    GroupsRoutingModule,
    ...materialModules,
    FlexLayoutModule,
    BrowserStorageModule
  ],
  declarations: [
    GroupListComponent,
    GroupDetailComponent
  ],
  providers: [
    GroupService,
    GroupDetailResolver,
    GroupListResolver
  ]
})
export class GroupsModule { }
