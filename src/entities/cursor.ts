import { CircleGeometry, LineDashedMaterial, Line } from 'three';

import { Entity } from "~/entity";


export class Cursor extends Entity {

	geometry: CircleGeometry;
	material: LineDashedMaterial;
	mesh: Line;
	speed: number = 1;

	constructor(options: any){
		super(options);

		this.geometry = new CircleGeometry( 1, 32 );
		this.geometry.vertices.shift();
		this.material = new LineDashedMaterial( { color: 0xffff00, dashSize: 0.1, gapSize: 0.2 } );
		this.mesh = new Line( this.geometry, this.material );
		this.mesh.computeLineDistances();

		this.game.entities.scene.add( this.mesh );

		console.log(this.game.entities.scene);
	}
	update(delta: number){

		const change: number = delta / 100;

		const mouse = this.game.controls;
		const speed_x: number = this.speed * mouse.x * change;
		const speed_y: number = this.speed * mouse.y * change;

		// this.mesh.position.x += speed_x;
		// this.mesh.position.y += speed_y;

	}
}