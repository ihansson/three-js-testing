import { Game } from "~/game";

export class Controls {
	game: Game;
	x: number = 0;
	y: number = 0;
	acceleration: number = 0;
	constructor(game: Game){
		this.game = game; 
		this.click = this.click.bind(this);
		this.mouse_move = this.mouse_move.bind(this);
		this.keypress = this.keypress.bind(this);
		this.bind();
	}
	bind(){
		window.addEventListener( 'click', this.click, false );
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
			this.acceleration += 0.3;
		} else if(event.keyCode === 119) { // up
			this.acceleration -= 0.3;
		}
		if(this.acceleration > 5) this.acceleration = 5;
		if(this.acceleration < -5) this.acceleration = -5;
	}
	click(event: any){
		this.game.state.shoot();
	}
}