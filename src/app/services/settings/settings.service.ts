import { Injectable } from '@angular/core';
import { Settings } from '../../models/settings';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class SettingsService {

  /**
   * Settings object
   */
  public currentSettings: Settings;

  /**
   * Alarm types
   */
  public alarmTypes: Array<string> = [];

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
    private storageService: StorageService
  ) {
    let savedSettings = this.storageService.get('settings');

    if (savedSettings){
      this.currentSettings = savedSettings;
    } else {
      this.resetSettings();
    }

    this.alarmTypes = [
      'beep',
      'siren',
      'zen-bell'
    ];

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

    console.log('settingsService instantiated');
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
      'zen-bell'
    );

    this.saveSettings();

    console.log('reset settings: ', this.currentSettings);
  }

  /**
   * Plays alarm sound
   */
  public playAlarm () : void {
    if (this.currentSettings.alarm === "none") { return; }

    var audio = new Audio();
    audio.src = "/assets/audio/" + this.currentSettings.alarm + ".mp3";
    audio.load();
    audio.play();

    console.log('played alarm sound: ', this.currentSettings.alarm);
  }

  /**
   * Save settings to local storage
   */
  public saveSettings() : void {
    this.storageService.save('settings', this.currentSettings);
  }

}
