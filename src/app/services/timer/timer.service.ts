import { Injectable } from '@angular/core';

import { Timer } from '../../models/timer';

@Injectable()
export class TimerService {
  /**
   * The main time object
   */
  private time: Timer;

  constructor(){
    console.log('timerService instantiated');
  }

  /**
   * Parses seconds in to minutes and seconds
   */
  private parse (seconds) {
    return {
      'minutes': (seconds / 60) | 0,
      'seconds': (seconds % 60) | 0
    };
  }

  /**
   * Sets timer duration and granularity
   */
  public setTimer(
    duration: number,
    granularity?: number
  ){

    this.time = new Timer(
      duration,
      granularity || 1000,
      [],
      false,
      0
    );

    console.log('new timer: ', this.time);

    return this;
  }

  /**
   * Get current time from timer
   */
  public getCurrentTime(){
    return (this.time.currentTime === 0) ? this.parse(this.time.duration) : this.time.currentTime;
  }

  /**
   * Get current time as percentage from timer
   */
  public getCurrentTimePercentage(){
    // let seconds = (this.time.currentTime.minutes * 60) + this.time.currentTime.seconds;
    // return seconds / this.time.duration;
  }

  /**
   * Start Timer
   */
  public startTimer(): void {

    if (this.time.running) {
      return;
    }

    this.time.running = true;

    console.log('timer running: ', this.time.running);

    var start = Date.now(),
        diff;

    var timer = () => {
      diff = this.time.duration - (((Date.now() - start) / 1000) | 0);

      if (this.time.running){
        if (diff > 0) {
          setTimeout(timer, this.time.granularity);
        } else {
          diff = 0;
          this.time.running = false;
        }

        this.time.currentTime = this.parse(diff);

        this.time.tickFtns.forEach(function(ftn) {
          ftn.call(this, this.time.currentTime.minutes, this.time.currentTime.seconds);
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
  public pauseTimer(){
    this.time.running = false;

    console.log('paused timer', this.time);

    return this;
  }

  /**
   * Restart Timer
   */
  public restartTimer(){
    this.setTimer(
      this.time.duration,
      this.time.granularity
    );

    console.log('restarted timer', this.time);

    return this;
  }

  /**
   * Call functions on timer tick
   */
  public onTick(ftn: Function) {

    if (typeof ftn === 'function') {
      this.time.tickFtns.push(ftn);
    }

    return this;
  }

  /**
   * Simple method that returns whether or not the timer has expired
   */
  public isExpired() {
    return !this.time.running;
  }

}
