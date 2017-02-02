import { Component } from '@angular/core';
import { TimerService } from '../../services/timer/timer.service';

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
    private timerService: TimerService
  ) {
    this.types = [
      'pomodoro',
      'short-break',
      'long-break'
    ];
  }

  /**
   * Check if current timer type matches value passed in
   */
  isTimerType(type: string): boolean{
    return this.timerService.type.getValue() === type;
  }

  /**
   * Set timer type
   */
  setTimer(type: string): void{
    this.timerService.setType(type);
  }

}
