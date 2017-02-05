import { Injectable } from '@angular/core';
import { Settings } from '../../models/settings';

@Injectable()
export class SettingsService {

  /**
   * Settings object
   */
  public currentSettings: Settings;

  /**
   * Timer types
   */
  public timerTypes: Array<string> = [];

  constructor(
  ) {
    console.log('settingsService instantiated');

    this.timerTypes = [
      'pomodoro',
      'short-break',
      'long-break'
    ];

    this.resetSettings();
  }

  /**
   * Resets settings back to defaults
   */
  public resetSettings() : void {
    this.currentSettings = new Settings(
      25,
      5,
      15,
      false,
      'Ding'
    );

    console.log('reset settings: ', this.currentSettings);
  }

}
