import { PerspectiveCamera, PointLight, Raycaster, Vector2 } from 'three';
import { Entity } from "~/entity";
import { Event } from "~/event";

export class Camera extends Entity {
	object: PerspectiveCamera;
	light: PointLight;
	raycaster: Raycaster;
	speed: number = 2;
	recent_collision: boolean = false;
	constructor(options: any){
		super(options);
		
		this.object = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.object.position.set( 0, 0, 0 );
		this.object.lookAt( 0, 0, 5 );

		this.raycaster = new Raycaster();
	}
	update(delta: number){

		const change: number = delta / 1000;

		const controls = this.game.controls;
		const speed_x: number = this.speed * controls.x * change;
		const speed_y: number = this.speed * controls.y * change;

		this.object.rotateY(-1 * speed_x);
		this.object.rotateX(speed_y);

		this.object.translateZ(this.speed * change * controls.acceleration);

		this.light.position.copy( this.object.position );

		this.collision();

	}
	collision(){

		let collided = false;

		this.raycaster.setFromCamera( new Vector2( 0, 0 ), this.object );
		const intersects = this.raycaster.intersectObjects( this.game.entities.filter('collides', true).map(entity => (<any>entity).mesh) );

		let _nearest: any = false;
		if(intersects.length > 0) _nearest = intersects[0];

		if(!this.recent_collision && _nearest && _nearest.distance < 1.5){
			// Collides
			this.game.controls.acceleration = (this.game.controls.acceleration * -1) * 0.25;
			this.recent_collision = true;
			this.game.events.add(new Event({
				'recurring': false,
				'delay': 150,
				'callback': () => {
					this.game.state.damage(20);
					this.recent_collision = false;
				}
			}))
		}

	}
}