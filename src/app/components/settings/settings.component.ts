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
   * Refreshes timer on change of input fields
   */
  refreshTimer() : void {
    this.timerService.restartTimer();
    this.timerService.getCurrentTime().subscribe((time) => {
      this.titleService.setTitle( time + ' | Sauce: A Pomodoro Timer' );
    });
  }

  /**
   * Resets settings and refreshes timer
   */
  resetSettings() : void {
    this.settingsService.resetSettings();
    this.refreshTimer();
  }

}
