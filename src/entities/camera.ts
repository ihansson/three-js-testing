import { PerspectiveCamera } from 'three';
import { Entity } from "~/entity";

export class Camera extends Entity {
	object: PerspectiveCamera;
	speed: number = 1;
	constructor(options: any){
		super(options);
		
		this.object = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.object.position.set( 0, 0, 5 );
		this.object.lookAt( 0, 0, 0 );

	}
	update(delta: number){

		const change: number = delta / 1000;

		const mouse = this.game.controls;
		const speed_x: number = this.speed * mouse.x * change;
		const speed_y: number = this.speed * mouse.y * change;

		this.object.rotation.x += speed_x;
		this.object.rotation.z += speed_y;

		console.log(this.object.rotation.z)

	}
}