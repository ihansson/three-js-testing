import { WebGLRenderer, Scene, PerspectiveCamera } from "three"

class Game {
	
	renderer: WebGLRenderer;
	scene: Scene;
	camera: PerspectiveCamera;

	constructor(){
		
		this.renderer = new WebGLRenderer({ antialias: true });
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );

		this.scene = new Scene();
		this.camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	}

	
	
}

const _game = new Game();
(<any>window).game = _game;

console.log(_game);