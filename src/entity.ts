import { Mesh } from 'three';
import { Game } from "~/game";

export class Entity {
	should_update: boolean;
	game: Game;
	collides: boolean = false;
	constructor(options: any){
		this.game = options.game; 
		this.should_update = true;
	}
	update(delta: number){}
}