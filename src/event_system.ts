import { Event } from "~/event";

export class EventSystem {
	events: Event[];
	constructor(){
		this.events = [];
	}
	add(event: Event){
		this.events.push(event)
	}
	remove(event: Event){
		this.events = this.events.filter((_event: Event): boolean => {
			return _event !== event;
		})
	}
	update(delta: number){
		this.events = this.events.filter((event: Event): boolean => {
			return event.update(delta);
		});
	}
}