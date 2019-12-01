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
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );