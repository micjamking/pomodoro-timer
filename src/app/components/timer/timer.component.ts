import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {
  @Input() public type: string;
  @Input() public time: any;

  constructor(
    private timerService: TimerService
  ) {
  }

  ngOnChanges(changes) {
    console.log('changes: ', changes.time);
    if (changes.time.currentValue !== ''){
      this.time = changes.time.currentValue;
    }
  }

  ngOnInit() {
  }

}
