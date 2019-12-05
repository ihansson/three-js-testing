import { Scene } from "three";
import { Entity } from "~/entity";
import { Camera } from "~/camera";

export class EntitySystem {
	scene: Scene;
	camera: Camera;
	entities: Entity[];
	constructor(){
		this.entities = [];
	}
	add(entity: Entity){
		this.entities.push(entity)
	}
	remove(entity: Entity){
		this.entities = this.entities.filter((_entity: Entity): boolean => {
			return _entity !== entity;
		})
	}
	filter(prop: string, value: any): Entity[] {
		return this.entities.filter((entity: Entity) => {
			return (<any>entity)[prop] === value;
		});
	}
}