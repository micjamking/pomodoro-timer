import { Component, OnInit } from '@angular/core';

import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-timer-view',
  templateUrl: './timer-view.component.html'
})
export class TimerViewComponent implements OnInit {

  constructor(
    private timerService: TimerService
  ) {
  }

  ngOnInit() {
    this.timerService.setTimer('pomodoro');
  }

}
