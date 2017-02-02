import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-timer-view',
  templateUrl: './timer-view.component.html'
})
export class TimerViewComponent implements OnInit {

  constructor(
    private titleService: Title,
    private timerService: TimerService
  ) { }

  ngOnInit() {
    this.timerService.setTimer('pomodoro');
    this.timerService.getCurrentTime().subscribe((time) => {
      this.titleService.setTitle( time + ' | Sauce: A Pomodoro Timer' );
    });
  }

}
