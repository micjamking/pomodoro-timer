import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private time: Object;

  constructor() {
    console.log('timer service instantiated');
  }

}
