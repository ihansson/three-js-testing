import { Game } from "~/game";

export class Entity {
	should_update: boolean;
	game: Game;
	constructor(options: any){
		this.game = options.game; 
		this.should_update = true;
	}
	update(delta: number){}
}