import { Component, OnInit } from '@angular/core';

import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-timer-view',
  templateUrl: './timer-view.component.html'
})
export class TimerViewComponent implements OnInit {
  public currentTime;

  constructor(
    private timerService: TimerService
  ) {
  }

  updateTime (minutes, seconds) {
    this.currentTime = minutes + ':' + seconds;
    console.log(this.currentTime);
  }

  onSelected(tab) {
    let time, currentTime;

    console.log('current selected tab: ', tab);

    switch(tab.tabTitle){
      case 'Short Break':
        time = 5;
        break;
      case 'Long Break':
        time = 15;
        break;
      case 'Pomodoro':
      default:
        time = 25;
    }

    currentTime = this.timerService.setTimer(time * 60).onTick(this.updateTime).getCurrentTime();

    this.currentTime = currentTime.minutes + ' : ' + ((currentTime.seconds < 10) ? '0' + currentTime.seconds : currentTime.seconds);
  }

  ngOnInit() {
  }

}
