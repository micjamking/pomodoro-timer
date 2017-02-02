import { BehaviorSubject } from 'rxjs';

export class Timer {
  constructor(
    public duration: number,
    public granularity: number,
    public tickFtns: any[],
    public running: BehaviorSubject<boolean>,
    public currentTime: BehaviorSubject<Object>
  ){ }
}
