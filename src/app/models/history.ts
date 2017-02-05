export class History {
  constructor(
    public isPomodoro: boolean,
    public type: string,
    public started: Date,
    public ended: Date
  ){ }
}
