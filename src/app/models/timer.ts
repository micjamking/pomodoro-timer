export class Timer {
  constructor(
    public duration: number,
    public granularity: number,
    public tickFtns: any[],
    public running: boolean,
    public currentTime: Object
  ){ }
}
