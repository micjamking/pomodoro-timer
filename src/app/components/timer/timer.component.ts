import { Component } from '@angular/core';
import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent {

  constructor(
    private timerService: TimerService
  ) { }

}
