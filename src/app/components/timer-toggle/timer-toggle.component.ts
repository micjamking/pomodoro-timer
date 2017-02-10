import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TimerService } from '../../services/timer/timer.service';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-timer-toggle',
  templateUrl: './timer-toggle.component.html'
})
export class TimerToggleComponent {

  /**
   * Timer types
   */
  public types: Array<string> = [];

  constructor(
    private titleService: Title,
    private timerService: TimerService,
    private settingsService: SettingsService
  ) { }

  /**
   * Check if current timer type matches value passed in
   */
  isTimerType(type: string): boolean{
    return this.timerService.getType() === type;
  }

  /**
   * Set timer type
   */
  setTimer(type: string): void{
    this.timerService.setType(type);
  }

}
