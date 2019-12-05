import { Game } from "~/game";

export class Controls {
	game: Game;
	x: number;
	y: number;
	constructor(game: Game){
		this.game = game; 
		this.mouse_move = this.mouse_move.bind(this);
		this.x = window.innerWidth / 2;
		this.y = window.innerHeight / 2;
		this.bind();
	}
	bind(){
		window.addEventListener( 'mousemove', this.mouse_move, false );
	}
	unbind(){
		window.removeEventListener( 'mousemove', this.mouse_move, false );
	}
	mouse_move(event: any){
		this.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		this.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	}
}