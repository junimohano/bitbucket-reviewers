import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChromeStorageService {
  setValue(keyValue: any): Observable<boolean> {
    return Observable.create((observer) => {
      chrome.storage.sync.set(keyValue, () => {
        observer.next(true);
        observer.complete();
      });
    });
  }

  getValue(key: string): Observable<any> {
    return Observable.create((observer) => {
      chrome.storage.sync.get(key, (items) => {
        observer.next(items);
        observer.complete();
      });
    });
  }

  removeValue(key: string): Observable<any> {
    return Observable.create((observer) => {
      chrome.storage.sync.remove(key, () => {
        observer.next(true);
        observer.complete();
      });
    });
  }


  addOnChangeListner(callback: (changes, namespace) => void): void {
    chrome.storage.onChanged.addListener((changes, namespace) => callback(changes, namespace));
  }
}
