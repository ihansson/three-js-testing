import { Geometry, PointsMaterial, Vector3, Points, Math } from 'three';
import { Entity } from "~/entity";

export class DustField extends Entity {

	geometry: Geometry;
	material: PointsMaterial;
	mesh: Points;

	collides: boolean = false;

	constructor(options: any){
		super(options);

		this.geometry = new Geometry();

		let particles: number = 200;
		while(particles){
			let particle = new Vector3();
            let theta = Math.randFloatSpread(360); 
            let phi = Math.randFloatSpread(360); 
			let distance = Math.randFloat(50, 75);
            particle.x = distance * window.Math.sin(theta) * window.Math.cos(phi);
            particle.y = distance * window.Math.sin(theta) * window.Math.sin(phi);
            particle.z = distance * window.Math.cos(theta);
			this.geometry.vertices.push(particle);
			particles--;
		}

		this.material = new PointsMaterial({ color: 0xffffff, size: 0.01, depthTest: false, transparent: true, opacity: 0.5 });
		this.mesh = new Points( this.geometry, this.material );
		this.mesh.renderOrder = 1;

		this.game.entities.scene.add(this.mesh);

	}

	update(){

		this.geometry.vertices.forEach(particle => {
			particle.z -= 0.75;
			if(particle.z < -75){
				particle.z = 75;
			}
		})
		this.geometry.verticesNeedUpdate = true;
		this.mesh.position.copy( this.game.entities.camera.object.position );

	}
}