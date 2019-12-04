// @todo import three types
const THREE = window.THREE;
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
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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
const renderer = new THREE.WebGLRenderer({ antialias: true });
const controls = new THREE.OrbitControls(camera, renderer.domElement);
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
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Make box
const geometry = new THREE.BoxGeometry(1, 1, 1);
/*

BoxGeometry is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth'.
On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.

*/
// const material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );
const material = new THREE.MeshLambertMaterial({ color: 0x0087E6 });
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);
/*

MeshBasicMaterial

A material for drawing geometries in a simple shaded (flat or wireframe) way.
Not affected by light

Constructor
    - Geometry
    - Material

*/
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < 100; i++) {
    let cube = new THREE.Mesh(geometry, material);
    cube.position.x = rand(0, 100) - 50;
    cube.position.y = rand(0, 100) - 50;
    cube.position.z = rand(0, 100) - 50;
    scene.add(cube);
}
/*

Class representing triangular polygon mesh based objects.

*/
// Set camera
// camera.position.z = 5;
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);
// Line
const line_material = new THREE.LineBasicMaterial({ color: 0x0000ff });
/*

@todo fill in line material

*/
const line_geometry = new THREE.Geometry();
/*

@todo fill in geometry methods

*/
line_geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
line_geometry.vertices.push(new THREE.Vector3(0, 1, 0));
line_geometry.vertices.push(new THREE.Vector3(1, 0, 0));
line_geometry.vertices.push(new THREE.Vector3(0, -1, 0));
line_geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
const line = new THREE.Line(line_geometry, line_material);
const circle_geometry = new THREE.CircleGeometry(1, 32);
circle_geometry.vertices.shift();
const circle_material = new THREE.LineDashedMaterial({ color: 0xffff00, dashSize: 0.1, gapSize: 0.2 });
const circle = new THREE.Line(circle_geometry, circle_material);
circle.computeLineDistances();
scene.add(circle);
circle.animation_progress = 0;
circle.animation_progress_delta = 0.75;
circle.up = true;
/*

Circle - Radius / segments

*/
/*

@todo fill in line

*/
scene.add(line);
// Testing hover
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let mouse_moved = false;
function onMouseMove(event) {
    mouse_moved = true;
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
window.addEventListener('mousemove', onMouseMove, false);
// Animate
let last_frame = 0;
function animate(time) {
    requestAnimationFrame(animate);
    const delta = (time - last_frame) / 1000;
    last_frame = time;
    // Rotate
    const speed = 1;
    // cube.rotation.x += delta * speed;
    // cube.rotation.y += delta * speed;
    if (circle.up) {
        circle.animation_progress += circle.animation_progress_delta * delta;
        if (circle.animation_progress > 1) {
            circle.animation_progress = 1;
            circle.up = false;
        }
    }
    else {
        circle.animation_progress -= circle.animation_progress_delta * delta;
        if (circle.animation_progress < 0) {
            circle.animation_progress = 0;
            circle.up = true;
        }
    }
    const circle_animation_state = ease(circle.animation_progress);
    circle.scale.x = 1 + circle_animation_state;
    circle.scale.y = 1 + circle_animation_state;
    circle.rotateZ(0.05 * circle_animation_state);
    // Hover
    if (mouse_moved) {
        raycaster.setFromCamera(mouse, camera);
        // calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(scene.children);
        for (let i = 0; i < scene.children.length; i++) {
            // scene.children[ i ].material.color.set( 0x0000ff );
        }
        for (let i = 0; i < intersects.length; i++) {
            // intersects[ i ].object.material.color.set( 0xff0000 );
        }
    }
    // Render
    renderer.render(scene, camera);
}
function ease(t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
animate(0);