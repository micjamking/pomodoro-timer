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

  /**
   * Timer sequence
   * @desc - 4 Pomodoros / 3 Short Breaks / 1 Long Break
   */
  public timerSequence: Array<string> = [];

  /**
   * Timer sequence index
   */
  public timerSequenceIndex: number;

  constructor(
  ) {
    console.log('settingsService instantiated');

    this.timerTypes = [
      'pomodoro',
      'short-break',
      'long-break'
    ];

    this.timerSequence = [
      this.timerTypes[0],
      this.timerTypes[1],
      this.timerTypes[0],
      this.timerTypes[1],
      this.timerTypes[0],
      this.timerTypes[1],
      this.timerTypes[0],
      this.timerTypes[2]
    ];

    this.timerSequenceIndex = 0;

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
