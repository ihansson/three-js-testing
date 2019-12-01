// @todo import three types

const THREE = <any>(<any>window).THREE;

const scene = new THREE.Scene();
/* Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
Properties
	- Fog : Fog
	- overrideMAterial : Material (sets material on everything)
	- autoUpdate: Renderer checks if objects need matrix updates. Default ist rue
	- background
Methods
	- toJSON : creates json object of scene metadata
	- dispose : clears data
*/

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );