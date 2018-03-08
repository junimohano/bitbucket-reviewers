import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { InfoComponent } from './info.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [InfoComponent]
})
export class InfoModule { }
