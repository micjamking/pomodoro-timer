export class Settings {
  constructor(
    public pomodoroTimer: number,
    public shortBreakTimer: number,
    public longBreakTimer: number,
    public autoswitch: boolean,
    public alarm: string
  ){ }
}
