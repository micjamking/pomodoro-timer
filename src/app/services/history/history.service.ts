import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import '../../rxjs-operators';
import { History } from '../../models/history';

@Injectable()
export class HistoryService {

  /**
   * History array
   */
  public history: Array<History> = [];

  constructor() {
    console.log('historyService instantiated');
  }

  public addTimeSegment(
    type: string,
    started: Date,
    ended: Date
  ) : void {
    let historyObj = new History(
      type === 'pomodoro',
      type,
      started,
      ended
    );

    this.history.push(historyObj);

    console.log('time segment added: ', this.history);
  }

  public clearAll() : void {
    this.history = [];

    console.log('cleared history: ', this.history);
  }

}
