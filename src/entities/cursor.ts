import { CircleGeometry, LineDashedMaterial, Line, Object3D, Math, Raycaster, Mesh, SphereGeometry, MeshBasicMaterial } from 'three';

import { Entity } from "~/entity";

export class Cursor extends Entity {

	geometry: CircleGeometry;
	material: LineDashedMaterial;
	mesh: Line;
	speed: number = 2;
	pivot: Object3D;
	raycaster: Raycaster;
	target: any;
	targetIndicator: Mesh;

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
		this.raycaster = new Raycaster();

		this.targetIndicator = new Mesh(new SphereGeometry(4.5, 6, 6), new MeshBasicMaterial({color: 0xFFFFFF, transparent: true, wireframe: true, opacity: 0.3}));
		this.targetIndicator.visible = false;
		this.game.entities.scene.add( this.targetIndicator );

	}
	update(delta: number){

		const camera = this.game.entities.camera.object;
		this.pivot.position.set(camera.position.x, camera.position.y, camera.position.z);

		const change: number = delta / 1000;

		const mouse = this.game.controls;
		const speed_x: number = this.speed * mouse.x * change;
		const speed_y: number = this.speed * mouse.y * change;

		this.mesh.rotation.y = -1 * mouse.x;
		this.mesh.rotation.x = -1 * mouse.y;
		// this.mesh.rotateX(mouse.y);

		this.pivot.rotateY(-1 * speed_x);
		this.pivot.rotateX(-1 * speed_y);



		// Hover nearest object

		let _target: any = false;
		this.raycaster.setFromCamera( mouse, camera );
		const intersects = this.raycaster.intersectObjects( this.game.entities.scene.children );
		if(intersects.length > 0){
			let distance = Infinity;
			intersects.map((intersect) => {
				if(intersect.distance < distance){
					_target = intersect;
					distance = intersect.distance;
				}
			})
		}


		if((_target && !this.target) || (_target && _target.object.uuid !== this.target.object.uuid)){
			// New target
			this.targetIndicator.visible = true;
			this.targetIndicator.position.copy( _target.object.position )
			this.material.color.set( 0x00ff00 );
		}

		if(!_target && this.target || (_target && this.target && _target.object.uuid !== this.target.object.uuid)){
			// Deselect
			if(!_target){
				this.targetIndicator.visible = false;
				this.material.color.set( 0xffff00 );
			}
		}

		this.target = _target;




	}
}