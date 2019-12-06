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
		/*
		this.game.entities.scene.background = new CubeTextureLoader().setPath( 'background/' ).load( [
			'right.png',
			'left.png',
			'top.png',
			'bot.png',
			'front.png',
			'back.png',
		] );
		*/

		// Add Cursor
		this.game.entities.add(new Cursor({game: this.game}))

		// Add Asteroids
		let i = 20;
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