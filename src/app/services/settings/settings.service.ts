import { Injectable } from '@angular/core';
import { Settings } from '../../models/settings';

@Injectable()
export class SettingsService {

  /**
   * Settings object
   */
  public currentSettings: Settings;

  constructor(
  ) {
    console.log('settingsService instantiated');

    this.currentSettings = new Settings(
      25,
      5,
      15,
      false,
      'Ding'
    );
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
