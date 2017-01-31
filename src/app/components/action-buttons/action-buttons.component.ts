import { Component, OnInit } from '@angular/core';

import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html'
})
export class ActionButtonsComponent implements OnInit {
  public isRunning: false;

  constructor(
    private timerService: TimerService
  ) { }

  startTimer(){
    this.timerService.startTimer();
  }

  pauseTimer(){
    this.timerService.pauseTimer();
  }

  restartTimer(){
    this.timerService.restartTimer();
  }

  ngOnInit() {
  }

}
