import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent
  ]
})
export class ListModule { }
