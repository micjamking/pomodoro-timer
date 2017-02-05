import { Injectable } from '@angular/core';
import { History } from '../../models/history';
import { SettingsService } from '../settings/settings.service';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class HistoryService {

  /**
   * History array
   */
  public history: Array<History>;

  constructor(
    private settingsService: SettingsService,
    private storageService: StorageService
  ) {
    let savedHistory = this.storageService.get('history');

    if (savedHistory){
      this.history = savedHistory;
    } else {
      this.history = [];
    }

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
    this.storageService.save('history', this.history);

    console.log('historical session added: ', this.history);
  }

  public clearAll() : void {
    this.history = [];
    this.storageService.remove('history');

    console.log('cleared history sessions: ', this.history);
  }

}
