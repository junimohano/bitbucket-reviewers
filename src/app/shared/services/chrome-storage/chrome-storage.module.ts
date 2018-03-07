import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChromeStorageService } from './chrome-storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ChromeStorageService
  ]
})
export class ChromeStorageModule { }
