import { MeshPhongMaterial, Mesh, DodecahedronGeometry } from 'three';
import { Entity } from "~/entity";
import { rand } from "~/helpers";

export class Asteroid extends Entity {

	geometry: DodecahedronGeometry;
	material: MeshPhongMaterial;
	mesh: Mesh;

	collides: boolean = true;

	constructor(options: any){

		super(options);
		this.geometry = this.generate_geometry();
		this.material = new MeshPhongMaterial( { color: 0x80d195, shininess: 150 } );
		this.mesh= new Mesh( this.geometry, this.material );

		let distance = 50;
		this.mesh.position.set(rand(0, distance) - (distance / 2), rand(0, distance) - (distance / 2), rand(5, distance));
		this.game.entities.scene.add(this.mesh)

	}
	generate_geometry(): DodecahedronGeometry {

		const detail = 0;
		const radius = rand(75, 400) / 100;
		const geometry = new DodecahedronGeometry( radius, detail );

		for(let i = 0; i < geometry.vertices.length; i++){
			let shift_level = 500;
			if(i % 2) shift_level = 250;
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