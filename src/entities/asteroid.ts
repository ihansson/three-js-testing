import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import { Entity } from "~/entity";
import { rand } from "~/helpers";

export class Asteroid extends Entity {

	geometry: BoxGeometry;
	material: MeshBasicMaterial;
	mesh: Mesh;

	constructor(options: any){
		super(options);
		
		this.geometry = new BoxGeometry( 1, 1, 1 );
		this.material = new MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );
		this.mesh= new Mesh( this.geometry, this.material );
		this.mesh.position.set(rand(0, 50) - 25, rand(0, 50) - 25, rand(25, 75));
		this.game.entities.scene.add(this.mesh)

	}
}