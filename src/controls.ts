import { Game } from "~/game";

export class Controls {
	game: Game;
	x: number = 0;
	y: number = 0;
	acceleration: number = -1;
	constructor(game: Game){
		this.game = game; 
		this.mouse_move = this.mouse_move.bind(this);
		this.keypress = this.keypress.bind(this);
		this.bind();
	}
	bind(){
		window.addEventListener( 'mousemove', this.mouse_move, false );
		window.addEventListener( 'keypress', this.keypress, false );
	}
	unbind(){
		window.removeEventListener( 'mousemove', this.mouse_move, false );
		window.removeEventListener( 'keypress', this.keypress, false );
	}
	mouse_move(event: any){
		this.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		this.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	}
	keypress(event: any){
		if(event.keyCode === 115) { // down
			this.acceleration += 0.1;
		} else if(event.keyCode === 119) { // up
			this.acceleration -= 0.1;
		}
		if(this.acceleration > 5) this.acceleration = 5;
		if(this.acceleration < -5) this.acceleration = -5;
	}
}