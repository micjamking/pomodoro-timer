import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  public save(key: string, value: any) : void{
    localStorage.setItem(key, JSON.stringify(value));

    console.log('saved ' + key + ':', value);
  }

  public get(key: string) : any{
    let value = localStorage.getItem(key);

    console.log('retrieved ' + key + ':', JSON.parse(value));

    return value && JSON.parse(value);
  }

  public remove(key: string) : void{
    localStorage.removeItem(key);

    console.log('removed ' + key);
  }

  public clear() : void{
    console.log('cleared storage');

    return localStorage.clear();
  }

}
