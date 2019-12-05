export class Event {
	constructor(){
		console.log('hello')
	}
	update(delta: number): boolean{
		console.log('rendering')
		return true;
	}
}