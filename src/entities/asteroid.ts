import { MeshLambertMaterial, Mesh, DodecahedronGeometry } from 'three';
import { Entity } from "~/entity";
import { rand } from "~/helpers";

export class Asteroid extends Entity {

	geometry: DodecahedronGeometry;
	material: MeshLambertMaterial;
	mesh: Mesh;

	constructor(options: any){

		super(options);
		this.geometry = this.generate_geometry();
		this.material = new MeshLambertMaterial( { color: 0x80d195 } );
		this.mesh= new Mesh( this.geometry, this.material );

		let distance = 50;
		this.mesh.position.set(rand(0, distance) - (distance / 2), rand(0, distance) - (distance / 2), rand(5, distance));
		this.game.entities.scene.add(this.mesh)

	}
	generate_geometry(): DodecahedronGeometry {

		const detail = 0;
		const radius = rand(25, 300) / 100;
		const geometry = new DodecahedronGeometry( radius, detail );

		for(let i = 0; i < geometry.vertices.length; i++){
			let shift_level = 500;
			if(i === 3) shift_level = 100;
			geometry.vertices[i].x += ((rand(0,100) - 50) / shift_level);
			geometry.vertices[i].y += ((rand(0,100) - 50) / shift_level);
			geometry.vertices[i].z += ((rand(0,100) - 50) / shift_level);
		}

		geometry.rotateX(rand(0,360));
		geometry.rotateY(rand(0,360));
		geometry.rotateZ(rand(0,360));

		return geometry;

	}
}