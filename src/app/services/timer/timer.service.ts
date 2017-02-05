import { Injectable, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import '../../rxjs-operators';
import { Timer } from '../../models/timer';
import { HistoryService } from '../history/history.service';
import { SettingsService } from '../settings/settings.service';
import { DashToSpacePipe } from '../../pipes/dash-to-space/dash-to-space.pipe';
import { CapitalizePipe } from '../../pipes/capitalize/capitalize.pipe';

@Injectable()
export class TimerService {
  /**
   * The main time object
   */
  private time: Timer;

  constructor(
    @Inject('Window') private window: Window,
    private datePipe: DatePipe,
    private dashToSpacePipe: DashToSpacePipe,
    private capitalizePipe: CapitalizePipe,
    private historyService: HistoryService,
    private settingsService: SettingsService
  ){
    console.log('timerService instantiated');
  }

  /**
   * Converts seconds to { 'minutes': 0, 'seconds': 0 }
   */
  private parseTime (seconds: number) : Object {
    return {
      'minutes': ('0' + ((seconds / 60) | 0)).slice(-2),
      'seconds': ('0' + ((seconds % 60) | 0)).slice(-2)
    };
  }

  /**
   * Gets current timer type
   */
  public getType() : string {
    return this.time.type.getValue();
  }

  /**
   * Sets time type
   */
  public setType(type: string) : TimerService {
    this.time.type.next(type);

    this.setTimer(
      type,
      this.time.granularity
    );

    console.log('current active timer: ', type);

    return this;
  }

  /**
   * Sets timer duration and granularity
   */
  public setTimer(
    type: string,
    granularity?: number
  ) : TimerService {

    this.time = new Timer(
      new BehaviorSubject(type),
      this.getDuration(type),
      granularity || 1000,
      [],
      new BehaviorSubject(false),
      new BehaviorSubject({}),
      null,
      null
    );

    console.log('set timer: ', this.time);

    return this;
  }

  /**
   * Converts time object to total seconds
   */
  private getSeconds (timeObj: Object) : number {
    return (parseInt(timeObj['minutes'], 10) * 60) + parseInt(timeObj['seconds'], 10);
  }

  /**
   * Get duration based on type of Timer
   */
  private getDuration (type: string) : number {
    let time;
    switch (type){
      case 'pomodoro':
        time = this.settingsService.currentSettings.pomodoroTimer;
        break;
      case 'short-break':
        time = this.settingsService.currentSettings.shortBreakTimer;
        break;
      case 'long-break':
        time = this.settingsService.currentSettings.longBreakTimer;
        break;
    }

    return time * 60;
  }

  /**
   * Get current time from timer
   */
  public getCurrentTime() : Observable<string> {
    if (!this.time){ return; }

    return this.time.currentTime.map((value) => {
      if (value['minutes'] && value['seconds']) {
        return value['minutes'] + ':' + value['seconds'];
      } else {
        var time = this.parseTime(this.time.duration);
        return time['minutes'] + ':' + time['seconds'];
      }
    });
  }

  /**
   * Get current time as percentage of original duration from timer
   */
  public getCurrentTimePercentage() : Observable<number> {
    if (!this.time){ return; }

    let originalDuration = this.getDuration(this.time.type.getValue());

    return this.time.currentTime.map((value) => {
      if (value['minutes'] && value['seconds']) {
        let seconds = this.getSeconds(value);
        return 100 - Math.floor((seconds / originalDuration) * 100);
      } else {
        if (this.time.duration){
          return 100 - Math.floor((this.time.duration / originalDuration) * 100);
        } else {
          return 0;
        }
      }
    });
  }

  /**
   * Gets next timer in list
   */
  private getNextTimer() : string {
    this.settingsService.timerSequenceIndex = (this.settingsService.timerSequenceIndex === this.settingsService.timerSequence.length - 1) ? 0 : this.settingsService.timerSequenceIndex + 1;

    return this.settingsService.timerSequence[this.settingsService.timerSequenceIndex];
  }

  /**
   * Start Timer
   */
  public startTimer() : void {

    if (this.time.running.getValue()) {
      return;
    }

    this.time.running.next(true);

    console.log('timer running: ', this.time.running.getValue());

    // Remove initial one second delay
    this.time.duration--;

    var start = Date.now(),
        diff,
        tempTime;

    this.time.started = this.time.started || new Date();

    var timer = () => {

      diff = this.time.duration - (((Date.now() - start) / 1000) | 0);

      if (this.time.running.getValue()){
        if (diff > 0) {
          setTimeout(timer, this.time.granularity);
        } else {
          diff = 0;

          this.time.running.next(false);
          this.time.ended = new Date();
          this.historyService.addTimeSegment(
            this.time.type.getValue(),
            this.time.started,
            this.time.ended
          );

          setTimeout(() => {
            let timerType = this.capitalizePipe.transform(this.dashToSpacePipe.transform(this.time.type.getValue()));
            window.alert(timerType + ' ended at ' + this.datePipe.transform(this.time.ended, 'shortTime'));
          }, 1000);

          console.log('timer ended: ', this.time);
        }

        this.time.currentTime.next(this.parseTime(diff));

        if (diff === 0 && this.settingsService.currentSettings.autoswitch){
          setTimeout(() => {
            this.setType(this.getNextTimer());
            this.startTimer();
          }, 1000);
        }

        this.time.tickFtns.forEach(function(ftn) {
          ftn(this.time.currentTime.getValue()['minutes'], this.time.currentTime.getValue()['seconds']);
        }, this);
      } else {
        return;
      }
    };

    timer();
  }

  /**
   * Pause Timer
   */
  public pauseTimer() : TimerService {
    this.time.running.next(false);
    this.time.duration = this.getSeconds(this.time.currentTime.getValue());

    console.log('paused timer', this.time);

    return this;
  }

  /**
   * Restart Timer
   */
  public restartTimer() : TimerService {

    this.setTimer(
      this.time.type.getValue(),
      this.time.granularity
    );

    console.log('timer restarted');

    return this;
  }

  /**
   * Call functions on timer tick
   */
  public onTick(ftn: Function) : TimerService {

    if (typeof ftn === 'function') {
      this.time.tickFtns.push(ftn);

      console.log('added to function list: ', this.time.tickFtns);
    }

    return this;
  }

  /**
   * Whether or not the timer is running
   */
  public isRunning() : BehaviorSubject<any> {
    if (!this.time){ return; }

    return this.time.running;
  }

}
