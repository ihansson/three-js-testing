import { Event } from "~/event";

export class EventSystem {
	events: Event[];
	constructor(){
		this.events = [];
	}
	update(delta: number){
		this.events = this.events.filter((event: Event): boolean => {
			return event.update(delta);
		});
	}
}