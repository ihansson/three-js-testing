// @todo import three types

const THREE = <any>(<any>window).THREE;

const scene = new THREE.Scene();
/* 

Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.

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
/*

This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used for rendering a 3D scene.

Constructor
	- Fov
	- Aspect ratio
	- Near distance
	- Far distance

Frustum is a cone like geometry used for defining the visible field.

Properties
	- Aspect
	- Far
	- filmGauge : default 35mm
	- filmOffset
	- focus
	- fov
	- isPerspectiveCamera
	- near
	- view
	- zoom

Methods
	- clearViewOffset 
	- getEffectiveFOV : Gets FOV considering the zoom
	- getFilmHeight
	- getFilmWidth
	- getFocalLength
	- setFocalLength
	- setViewOffset
	- updateProjectionMatrix : Must be called after changes of parameters
	- toJSON : creates json object of metadata

*/

const renderer = new THREE.WebGLRenderer();

/* 

Displays scenes using WebGL

Constructor
	- parameters
		- canvas
		- context : used if already have an existing rendering context
		- precision : shader precision
		- alpha : if an alpha buffer exists in canvas
		- premultipliedAlpha 
		- antialias : if to antialias - default false
		- stencil : whether the drawing buffer has a stencil buffer
		- preserveDrawingBuffer : preserve buffers until manually cleared - default false
		- powerPreference
		- failifMajorPerformanceCaveat
		- depth : if depth buffer exists
		- logarithmicDepthBuffer

@todo finish this list by going through all rendered properties and methods

*/

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Make box

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

/*

BoxGeometry is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth'. 
On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.

*/


const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );

/* 

A material for drawing geometries in a simple shaded (flat or wireframe) way.
Not affected by light

*/

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Set camera

camera.position.z = 5;

// Animate

function animate() {
	requestAnimationFrame( animate );
	
	// Rotate
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	
	// Render
	renderer.render( scene, camera );
}
animate();