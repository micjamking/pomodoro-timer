import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TimerService } from '../../services/timer/timer.service';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-timer-view',
  templateUrl: './timer-view.component.html'
})
export class TimerViewComponent implements OnInit {

  constructor(
    private titleService: Title,
    private timerService: TimerService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.timerService.setTimer(this.settingsService.timerTypes[0]);
  }

}
