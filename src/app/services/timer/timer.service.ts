import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import '../../rxjs-operators';

import { Timer } from '../../models/timer';

@Injectable()
export class TimerService {
  /**
   * The main time object
   */
  private time: Timer;

  /**
   * Type of Timer
   * @desc ('pomodoro'|'short-break'|'long-break')
   */
  public type: BehaviorSubject<string>;

  constructor(){

    console.log('timerService instantiated');

    this.type = new BehaviorSubject('pomodoro');
  }

  /**
   * Parses seconds in to minutes and seconds
   */
  private parseTime (seconds: number) : Object {
    return {
      'minutes': ('0' + ((seconds / 60) | 0)).slice(-2),
      'seconds': ('0' + ((seconds % 60) | 0)).slice(-2)
    };
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
        time = 25;
        break;
      case 'short-break':
        time = 5;
        break;
      case 'long-break':
        time = 15;
        break;
    }

    return time * 60;
  }

  /**
   * Sets timerType
   */
  public setType(type: string) : TimerService{
    this.type.next(type);

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
  ) : TimerService{

    this.time = new Timer(
      this.getDuration(type),
      granularity || 1000,
      [],
      new BehaviorSubject(false),
      new BehaviorSubject({})
    );

    console.log('set timer: ', this.time);

    return this;
  }

  /**
   * Get current time from timer
   */
  public getCurrentTime() : Observable<any> {
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
  public getCurrentTimePercentage() : Observable<any> {
    if (!this.time){ return; }

    let originalDuration = this.getDuration(this.type.getValue());

    return this.time.currentTime.map((value) => {
      if (value['minutes'] && value['seconds']) {
        let seconds = this.getSeconds(value);
        return 100 - Math.floor((seconds / originalDuration) * 100);
      } else {
        return 100 - Math.floor((this.time.duration / originalDuration) * 100);
      }
    });
  }

  /**
   * Start Timer
   */
  public startTimer(): void {

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

    // Subscribe to currentTime
    // let currentTime = this.getCurrentTime();

    // Assign current time to temp variable
    // currentTime.subscribe((value) => {
    //   tempTime = value;
    // });

    var timer = () => {

      diff = this.time.duration - (((Date.now() - start) / 1000) | 0);

      if (this.time.running.getValue()){
        if (diff > 0) {
          setTimeout(timer, this.time.granularity);
        } else {
          diff = 0;
          this.time.running.next(false);
        }

        this.time.currentTime.next(this.parseTime(diff));

        // console.log(tempTime);

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
  public pauseTimer() : TimerService{
    this.time.running.next(false);
    this.time.duration = this.getSeconds(this.time.currentTime.getValue());

    console.log('paused timer', this.time.currentTime.getValue());

    return this;
  }

  /**
   * Restart Timer
   */
  public restartTimer() : TimerService{

    this.setTimer(
      this.type.getValue(),
      this.time.granularity
    );

    console.log('timer restarted');

    return this;
  }

  /**
   * Call functions on timer tick
   */
  public onTick(ftn: Function) : TimerService{

    if (typeof ftn === 'function') {
      this.time.tickFtns.push(ftn);
    }

    return this;
  }

  /**
   * Simple method that returns whether or not the timer has expired
   */
  public isRunning() : BehaviorSubject<any>{
    if (!this.time){ return; }

    return this.time.running;
  }

}
