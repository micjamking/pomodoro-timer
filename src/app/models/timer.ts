import { BehaviorSubject } from 'rxjs';

export class Timer {
  constructor(
    public type: BehaviorSubject<string>,
    public duration: number,
    public granularity: number,
    public tickFtns: any[],
    public running: BehaviorSubject<boolean>,
    public currentTime: BehaviorSubject<Object>,
    public started: Date,
    public ended: Date
  ){ }
}
