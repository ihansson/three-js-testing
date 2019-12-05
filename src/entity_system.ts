import { Scene } from "three";
import { Entity } from "~/entity";

export class EntitySystem {
	scene: Scene;
	entities: Entity[];
	constructor(scene: Scene){
		this.scene = scene;
		this.entities = [];
	}
	filter(prop: string, value: any): Entity[] {
		return this.entities.filter((entity: Entity) => {
			return (<any>entity).prop === value;
		});
	}
}