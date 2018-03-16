import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
  showInfoIcon = new BehaviorSubject<boolean>(false);

  constructor() { }
}
