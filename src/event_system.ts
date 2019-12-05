import { System } from "~/system";
import { Event } from "~/event";

export class EventSystem extends System<Event> {
	constructor(){
		super();
	}
}