import { WebGLRenderer, Scene } from "three";
import { Camera } from "~/camera";
import { EntitySystem } from "~/entity_system";
import { Entity } from "~/entity";
import { EventSystem } from "~/event_system";
import { Event } from "~/event";

class Game {
	
	renderer: WebGLRenderer;
	scene: Scene;
	camera: Camera;

	entities: EntitySystem;
	events: EventSystem;

	constructor(){
		
		this.renderer = new WebGLRenderer({ antialias: true });
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );

		// Setup scene and entities

		this.scene = new Scene();
		this.camera = new Camera();
		this.entities = new EntitySystem(this.scene);

		// Setup events system

		this.events = new EventSystem();
		this.events.add(new Event({
			'recurring': true,
			'delay': 1000,
			'callback': function(){
				console.log('One Second Timer');
			}
		}))

		// Start Animation

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
		this.renderer.render( this.scene, this.camera.object );
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