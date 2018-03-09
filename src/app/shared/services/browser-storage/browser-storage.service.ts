import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map } from 'rxjs/operators';

@Injectable()
export class BrowserStorageService {

  private storage = browser.storage.sync;

  setValue(keyValue: any): Observable<boolean> {
    return fromPromise(this.storage.set(keyValue));
  }

  getValue(key: string): Observable<any> {
    return fromPromise(this.storage.get(key))
      .pipe(map(items => items));
  }

  removeValue(key: string): Observable<any> {
    return fromPromise(this.storage.remove(key));
  }

  reset(): Observable<any> {
    return fromPromise(this.storage.clear());
  }

  addOnChangeListner(callback: (changes, namespace) => void): void {
    this.storage.onChanged.addListener((changes, namespace) => callback(changes, namespace));
  }
}
