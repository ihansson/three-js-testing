import { Geometry, PointsMaterial, Vector3, Math, Points } from 'three';
import { Entity } from "~/entity";

export class StarField extends Entity {

	geometry: Geometry;
	material: PointsMaterial;
	mesh: Points;

	collides: boolean = false;

	constructor(options: any){
		super(options);

		this.geometry = new Geometry();

		let stars: number = 200;
		while(stars){
			let star = new Vector3();
			star.x = Math.randFloatSpread( 2000 );
			star.y = Math.randFloatSpread( 2000 );
			star.z = Math.randFloatSpread( 2000 );
			this.geometry.vertices.push(star);
			stars--;
		}

		this.material = new PointsMaterial({ color: 0xffffff });
		this.mesh = new Points( this.geometry, this.material );

		this.game.entities.scene.add(this.mesh)

	}
}