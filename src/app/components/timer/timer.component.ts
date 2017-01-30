import { Component, OnInit, Input } from '@angular/core';

import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {
  @Input() public type: string;
  public time: string;

  constructor(
    private timerService: TimerService
  ) {
  }

  ngOnInit() {
    switch(this.type){
      case 'Pomodoro':
        this.time = '25:00';
        break;
      case 'Short Break':
        this.time = '05:00';
        break;
      case 'Long Break':
        this.time = '15:00';
        break;
      default:
        return;
    }
  }

}
