import { System } from "~/system";
import { Scene } from "three";
import { Entity } from "~/entity";
import { Camera } from "~/entities/camera";

export class EntitySystem extends System<Entity> {
	scene: Scene;
	camera: Camera;
	entities: Entity[];
	constructor(){
		super();
		this.entities = [];
	}
}