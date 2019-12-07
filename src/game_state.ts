import { CubeTextureLoader, AmbientLight, DirectionalLight, PointLight } from 'three';
import { Game } from "~/game";
import { Event } from "~/event";
import { Cursor } from "~/entities/cursor";
import { Asteroid } from "~/entities/asteroid";
import { StarField } from "~/entities/star_field";
import { DustField } from "~/entities/dust_field";

export class GameState {

	game: Game;
	type: string;
	health: number = 100;

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
		this.game.entities.add(new StarField({game: this.game}));
		this.game.entities.add(new DustField({game: this.game}));

		// Add Cursor
		this.game.entities.add(new Cursor({game: this.game}))

		// Add Asteroids
		let asteroids: number = 20;
		while(asteroids){
			this.game.entities.add(new Asteroid({game: this.game}))
			asteroids--;
		}

		// UI Events
		const time_el = document.querySelector('#time');
		let timer = 0;
		this.game.events.add(new Event({
			'recurring': true,
			'delay': 1000,
			'callback': function(){
				timer++;
				time_el.innerHTML = (<any>timer);
			}
		}))

	}

	damage(amount: number){
		this.health -= amount;
		if(this.health < 0) this.health = 0;
		if(this.health == 0){
			// lost
		}
		document.querySelector('#health').setAttribute('style','width:'+this.health+'%');
	}

	update_space(){

	}

	end_space(){

	} 

}