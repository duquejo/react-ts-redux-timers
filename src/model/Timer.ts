class Timer {
	public name;
	public time;
	public isRunning;
	constructor(name: string) {
		this.name = name;
		this.time = 0;
		this.isRunning = false;
	}
}

export default Timer;
