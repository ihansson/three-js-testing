import { CubeTextureLoader, AmbientLight, DirectionalLight, PointLight } from 'three';
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

		// Lighting
		const ambientLight = new AmbientLight( 0xe1ebd1, 0.3 );
		this.game.entities.scene.add(ambientLight);

		const directionalLight = new DirectionalLight( 0xcbff78, 0.3 );
		this.game.entities.scene.add(directionalLight);

		const pointLight = new PointLight( 0xffffff, 0.4 );
		this.game.entities.scene.add(pointLight);
		this.game.entities.camera.light = pointLight;

		// Background

		let stars: number = 200;
		while(stars){
			this.game.entities.add(new Asteroid({game: this.game}))
			stars--;
		}

		// Add Cursor
		this.game.entities.add(new Cursor({game: this.game}))

		// Add Asteroids
		let asteroids: number = 20;
		while(asteroids){
			this.game.entities.add(new Asteroid({game: this.game}))
			asteroids--;
		}

	}

	update_space(){

	}

	end_space(){

	} 

}