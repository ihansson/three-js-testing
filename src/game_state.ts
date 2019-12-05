import { Game } from "~/game";
import { Cursor } from "~/entities/cursor";
import { Asteroid } from "~/entities/asteroid";

export class GameState {

	game: Game;
	type: string;

	constructor(game: Game, type: string){
		this.game = game;
		this.type = type;
		(<any>this)['init_'+this.type]();
	}

	update(){
		(<any>this)['update_'+this.type]();
	}

	// Space

	init_space(){

		// Add Cursor
		this.game.entities.add(new Cursor({game: this.game}))

		// Add Asteroids
		let i = 5;
		while(i){
			this.game.entities.add(new Asteroid({game: this.game}))
			i--;
		}

	}

	update_space(){

	}

	end_space(){

	} 

}