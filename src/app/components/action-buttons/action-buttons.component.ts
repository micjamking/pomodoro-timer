import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html'
})
export class ActionButtonsComponent {

  constructor(
    private titleService: Title,
    private timerService: TimerService
  ) {}

  /**
   * Toggle play/pause of timer
   */
  toggleTimer(){
    if (this.timerService.isRunning().getValue()){
      this.timerService.pauseTimer();
    } else {
      this.timerService.startTimer();
    }
  }

  /**
   * Restarts timer
   */
  restartTimer(){
    this.timerService.restartTimer();
    this.timerService.getCurrentTime().subscribe((time) => {
      this.titleService.setTitle( time + ' | Sauce: A Pomodoro Timer' );
    });
  }

}
