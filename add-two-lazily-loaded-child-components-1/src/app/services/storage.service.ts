import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService<T> {

  getValue(key: string, defaultValue?: T): T | undefined {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  }

  setValue(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
