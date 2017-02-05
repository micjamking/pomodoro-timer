import { Injectable } from '@angular/core';
import { History } from '../../models/history';
import { SettingsService } from '../settings/settings.service';

@Injectable()
export class HistoryService {

  /**
   * History array
   */
  public history: Array<History> = [];

  constructor(
    private settingsService: SettingsService
  ) {
    console.log('historyService instantiated');
  }

  public addTimeSegment(
    type: string,
    started: Date,
    ended: Date
  ) : void {
    let historyObj = new History(
      type === this.settingsService.timerTypes[0],
      type,
      started,
      ended
    );

    this.history.push(historyObj);

    console.log('historical session added: ', this.history);
  }

  public clearAll() : void {
    this.history = [];

    console.log('cleared history sessions: ', this.history);
  }

}
