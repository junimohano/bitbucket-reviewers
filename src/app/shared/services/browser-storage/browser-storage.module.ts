import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserStorageService } from './browser-storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    BrowserStorageService
  ]
})
export class BrowserStorageModule { }
