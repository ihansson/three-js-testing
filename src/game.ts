import { WebGLRenderer, Scene } from "three";
import { Camera } from "~/entities/camera";
import { EntitySystem } from "~/entity_system";
import { Entity } from "~/entity";
import { EventSystem } from "~/event_system";
import { Event } from "~/event";
import { Controls } from "~/controls";
import { GameState } from "~/game_state";

export class Game {
	
	renderer: WebGLRenderer;
	scene: Scene;
	camera: Camera;
	state: GameState;

	entities: EntitySystem;
	events: EventSystem;

	controls: Controls;

	constructor(){
		this.init_renderer();
		this.init_entities();
		this.init_events();
		this.init_state();
		this.init_controls();
		this.init_animation();
	}

	// Setup Renderer

	init_renderer(): void{

		this.renderer = new WebGLRenderer({ antialias: true });
		console.log( window.innerWidth, window.innerHeight)
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );

	}

	// Setup entities

	init_entities(): void{

		this.entities = new EntitySystem();
		this.entities.scene = new Scene();
		this.entities.camera = new Camera({game: this});
		this.entities.add(this.entities.camera);

	}

	// Setup events system

	init_events(): void{

		this.events = new EventSystem();

	}

	// Setup game state

	init_state(): void{

		this.state = new GameState(this, 'space');
		this.events.add(new Event({
			'recurring': true,
			'delay': 1000,
			'callback': () => {
				this.state.update();
			}
		}))

	}

	// Setup controls

	init_controls(): void{

		this.controls = new Controls(this);

	}

	// Setup animation

	init_animation(): void{

		this.animate = this.animate.bind(this);
		this.previous_time = 0;
		this.animate(0);

	}

	// Animation Loop. Call update on entities and events

	animate(time: number): void{

		requestAnimationFrame( this.animate );
		const delta: number = this.get_delta(time);

		this.events.update(delta);

		this.entities.filter('should_update', true).forEach((entity: Entity) => {
			entity.update(delta);
		});

		this.render();
	} 

	// Call Render

	render(): void{
		this.renderer.render( this.entities.scene, this.entities.camera.object );
	}

	// Get time passed between given time and last time

	previous_time: number;
	
	get_delta(time: number): number{
		const delta: number = (time - this.previous_time);
		this.previous_time = time;
		return delta;
	}

}

const _game = new Game();
(<any>window).game = _game;

console.log(_game);