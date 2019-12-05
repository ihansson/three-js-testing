import { PerspectiveCamera } from 'three';

export class Camera {
	object: PerspectiveCamera;
	constructor(){
		this.object = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	}
}