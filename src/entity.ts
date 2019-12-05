export class Entity {
	should_update: boolean;
	constructor(){
		this.should_update = false;
		console.log('hello')
	}
	update(delta: number){
		console.log('rendering')
	}
}