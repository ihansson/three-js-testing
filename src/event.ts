interface EventOptions {
	recurring: boolean
	delay: number
	callback: () => void
}

export class Event {
	
	options: EventOptions
	time: number

	constructor(options: EventOptions){
		this.options = options;
		this.time = 0;
	}

	update(delta: number): boolean{
		this.time += delta;
		if(this.time > this.options.delay){
			// Fire event callback if the delay time has passed
			this.options.callback();
			this.time = 0;
			// Return false signaling that this event can be removed as it is not recurring
			if(!this.options.recurring) return false;
		}
		return true;
	}

}