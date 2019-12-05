import { PerspectiveCamera } from 'three';
import { Entity } from "~/entity";

export class Camera extends Entity {
	object: PerspectiveCamera;
	constructor(){
		super();
		this.object = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	}
}