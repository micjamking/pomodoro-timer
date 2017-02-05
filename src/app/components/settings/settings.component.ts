import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings/settings.service';
import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {

  constructor(
    private titleService: Title,
    private timerService: TimerService,
    private settingsService: SettingsService
  ) { }

  /**
   * Converts timer names to camelCase
   */
  private camelize(str: string) : string {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/-/g, '');
  }

  /**
   * Refreshes timer on change of input fields
   */
  public refreshTimer() : void {
    this.timerService.restartTimer();
    this.timerService.getCurrentTime().subscribe((time) => {
      this.titleService.setTitle( time + ' | Sauce: A Pomodoro Timer' );
    });
  }

  /**
   * Resets settings and refreshes timer
   */
  public resetSettings() : void {
    this.settingsService.resetSettings();
    this.refreshTimer();
  }

}
