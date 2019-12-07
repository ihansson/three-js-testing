import { Geometry, Line, Raycaster, LineBasicMaterial, Vector3, Vector2 } from 'three';
import { Entity } from "~/entity";

export class Shot extends Entity {

	geometry: Geometry;
	material: LineBasicMaterial;
	mesh: Line;
	raycaster: Raycaster;
	life: number = 2000;
	collides: boolean = false;

	constructor(options: any){

		super(options);

		const camera = this.game.entities.camera.object;

		this.raycaster = new Raycaster();
		this.raycaster.setFromCamera( new Vector2(0,0), camera );

		this.geometry = new Geometry();
		this.geometry.vertices.push(
			camera.position,
			new Vector3(camera.position.x, camera.position.y, camera.position.z).add(this.raycaster.ray.direction)
		);
		this.material = new LineBasicMaterial( { color: 0xffffff } );
		this.mesh= new Line( this.geometry, this.material );

		this.game.entities.scene.add(this.mesh);

	}

	update(delta: number){

		this.life -= delta;
		const change: number = delta / 1000;

		let target: any = false;
		const intersects = this.raycaster.intersectObjects( this.game.entities.filter('collides', true).map(entity => (<any>entity).mesh) );
		if(intersects) target = intersects[0];

		if(this.life < 0){
			this.game.entities.remove(this);
			this.game.entities.scene.remove(this.mesh);
			return;
		}

		if(target){
			this.life = 0;
			this.game.state.score(10);
			this.game.entities.scene.remove(target.object);
		}

	}

}