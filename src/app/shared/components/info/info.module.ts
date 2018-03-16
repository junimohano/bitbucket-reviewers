import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { InfoComponent } from './info.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule
  ],
  declarations: [InfoComponent]
})
export class InfoModule { }
