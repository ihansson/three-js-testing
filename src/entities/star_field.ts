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
            let theta = Math.randFloatSpread(360); 
            let phi = Math.randFloatSpread(360); 
			let distance = Math.randFloat(400, 800);
            star.x = distance * window.Math.sin(theta) * window.Math.cos(phi);
            star.y = distance * window.Math.sin(theta) * window.Math.sin(phi);
            star.z = distance * window.Math.cos(theta);
			this.geometry.vertices.push(star);
			stars--;
		}

		this.material = new PointsMaterial({ color: 0xffffff });
		this.mesh = new Points( this.geometry, this.material );

		this.game.entities.scene.add(this.mesh)

	}
}