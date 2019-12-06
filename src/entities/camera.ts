import { PerspectiveCamera, PointLight } from 'three';
import { Entity } from "~/entity";

export class Camera extends Entity {
	object: PerspectiveCamera;
	light: PointLight;
	speed: number = 1;
	constructor(options: any){
		super(options);
		
		this.object = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.object.position.set( 0, 0, 0 );
		this.object.lookAt( 0, 0, 5 );
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

	}
}