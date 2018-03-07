import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    MatListModule,
    ListComponent
  ],
  declarations: [
    ListComponent
  ]
})
export class ListModule { }
