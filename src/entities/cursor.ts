import { CircleGeometry, LineDashedMaterial, Line, Object3D } from 'three';

import { Entity } from "~/entity";

export class Cursor extends Entity {

	geometry: CircleGeometry;
	material: LineDashedMaterial;
	mesh: Line;
	speed: number = 2;
	pivot: Object3D;

	constructor(options: any){
		super(options);

		this.geometry = new CircleGeometry( 1, 32 );
		this.geometry.vertices.shift();
		this.material = new LineDashedMaterial( { color: 0xffff00, dashSize: 0.1, gapSize: 0.2 } );
		this.mesh = new Line( this.geometry, this.material );
		this.mesh.computeLineDistances();
		this.mesh.position.set(0,0,5);

		this.pivot = new Object3D();
		this.pivot.add( this.mesh );

		this.game.entities.scene.add( this.pivot );

	}
	update(delta: number){

		const camera = this.game.entities.camera.object;
		this.pivot.position.set(camera.position.x, camera.position.y, camera.position.z);

		const change: number = delta / 1000;

		const mouse = this.game.controls;
		const speed_x: number = this.speed * mouse.x * change;
		const speed_y: number = this.speed * mouse.y * change;

		this.pivot.rotateY(-1 * speed_x);
		this.pivot.rotateX(-1 * speed_y);

	}
}