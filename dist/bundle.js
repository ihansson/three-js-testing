/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DirectionalLightShadow, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FaceNormalsHelper, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontFaceDirectionCCW, FrontFaceDirectionCW, FrontSide, Frustum, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, LightProbeHelper, LightShadow, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PositionalAudioHelper, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RectAreaLightHelper, RedFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SphericalReflectionMapping, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, SpotLightShadow, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uncharted2ToneMapping, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VertexNormalsHelper, VideoTexture, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/controls.ts":
/*!*************************!*\
  !*** ./src/controls.ts ***!
  \*************************/
/*! exports provided: Controls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controls\", function() { return Controls; });\nclass Controls {\r\n    constructor(game) {\r\n        this.game = game;\r\n        this.mouse_move = this.mouse_move.bind(this);\r\n        this.x = window.innerWidth / 2;\r\n        this.y = window.innerHeight / 2;\r\n        this.bind();\r\n    }\r\n    bind() {\r\n        window.addEventListener('mousemove', this.mouse_move, false);\r\n    }\r\n    unbind() {\r\n        window.removeEventListener('mousemove', this.mouse_move, false);\r\n    }\r\n    mouse_move(event) {\r\n        this.x = (event.clientX / window.innerWidth) * 2 - 1;\r\n        this.y = -(event.clientY / window.innerHeight) * 2 + 1;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/controls.ts?");

/***/ }),

/***/ "./src/entities/asteroid.ts":
/*!**********************************!*\
  !*** ./src/entities/asteroid.ts ***!
  \**********************************/
/*! exports provided: Asteroid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Asteroid\", function() { return Asteroid; });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/entity */ \"./src/entity.ts\");\n\r\nclass Asteroid extends _entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"] {\r\n    constructor(options) {\r\n        super(options);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/entities/asteroid.ts?");

/***/ }),

/***/ "./src/entities/camera.ts":
/*!********************************!*\
  !*** ./src/entities/camera.ts ***!
  \********************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Camera\", function() { return Camera; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/entity */ \"./src/entity.ts\");\n\r\n\r\nclass Camera extends _entity__WEBPACK_IMPORTED_MODULE_1__[\"Entity\"] {\r\n    constructor(options) {\r\n        super(options);\r\n        this.speed = 1;\r\n        this.object = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](75, window.innerWidth / window.innerHeight, 0.1, 1000);\r\n        this.object.position.set(0, 0, 5);\r\n        this.object.lookAt(0, 0, 0);\r\n    }\r\n    update(delta) {\r\n        const change = delta / 1000;\r\n        const mouse = this.game.controls;\r\n        const speed_x = this.speed * mouse.x * change;\r\n        const speed_y = this.speed * mouse.y * change;\r\n        this.object.rotation.x += speed_x;\r\n        this.object.rotation.z += speed_y;\r\n        console.log(this.object.rotation.z);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/entities/camera.ts?");

/***/ }),

/***/ "./src/entities/cursor.ts":
/*!********************************!*\
  !*** ./src/entities/cursor.ts ***!
  \********************************/
/*! exports provided: Cursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cursor\", function() { return Cursor; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/entity */ \"./src/entity.ts\");\n\r\n\r\nclass Cursor extends _entity__WEBPACK_IMPORTED_MODULE_1__[\"Entity\"] {\r\n    constructor(options) {\r\n        super(options);\r\n        this.speed = 1;\r\n        this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"CircleGeometry\"](1, 32);\r\n        this.geometry.vertices.shift();\r\n        this.material = new three__WEBPACK_IMPORTED_MODULE_0__[\"LineDashedMaterial\"]({ color: 0xffff00, dashSize: 0.1, gapSize: 0.2 });\r\n        this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Line\"](this.geometry, this.material);\r\n        this.mesh.computeLineDistances();\r\n        this.game.entities.scene.add(this.mesh);\r\n        console.log(this.game.entities.scene);\r\n    }\r\n    update(delta) {\r\n        const change = delta / 100;\r\n        const mouse = this.game.controls;\r\n        const speed_x = this.speed * mouse.x * change;\r\n        const speed_y = this.speed * mouse.y * change;\r\n        // this.mesh.position.x += speed_x;\r\n        // this.mesh.position.y += speed_y;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/entities/cursor.ts?");

/***/ }),

/***/ "./src/entity.ts":
/*!***********************!*\
  !*** ./src/entity.ts ***!
  \***********************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Entity\", function() { return Entity; });\nclass Entity {\r\n    constructor(options) {\r\n        this.game = options.game;\r\n        this.should_update = true;\r\n    }\r\n    update(delta) { }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/entity.ts?");

/***/ }),

/***/ "./src/entity_system.ts":
/*!******************************!*\
  !*** ./src/entity_system.ts ***!
  \******************************/
/*! exports provided: EntitySystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EntitySystem\", function() { return EntitySystem; });\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/system */ \"./src/system.ts\");\n\r\nclass EntitySystem extends _system__WEBPACK_IMPORTED_MODULE_0__[\"System\"] {\r\n    constructor() {\r\n        super();\r\n        this.entities = [];\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/entity_system.ts?");

/***/ }),

/***/ "./src/event.ts":
/*!**********************!*\
  !*** ./src/event.ts ***!
  \**********************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Event\", function() { return Event; });\nclass Event {\r\n    constructor(options) {\r\n        this.options = options;\r\n        this.time = 0;\r\n    }\r\n    update(delta) {\r\n        this.time += delta;\r\n        if (this.time > this.options.delay) {\r\n            // Fire event callback if the delay time has passed\r\n            this.options.callback();\r\n            this.time = 0;\r\n            // Return false signaling that this event can be removed as it is not recurring\r\n            if (!this.options.recurring)\r\n                return false;\r\n        }\r\n        return true;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/event.ts?");

/***/ }),

/***/ "./src/event_system.ts":
/*!*****************************!*\
  !*** ./src/event_system.ts ***!
  \*****************************/
/*! exports provided: EventSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventSystem\", function() { return EventSystem; });\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/system */ \"./src/system.ts\");\n\r\nclass EventSystem extends _system__WEBPACK_IMPORTED_MODULE_0__[\"System\"] {\r\n    constructor() {\r\n        super();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/event_system.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _entities_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/entities/camera */ \"./src/entities/camera.ts\");\n/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/entity_system */ \"./src/entity_system.ts\");\n/* harmony import */ var _event_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/event_system */ \"./src/event_system.ts\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/event */ \"./src/event.ts\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/controls */ \"./src/controls.ts\");\n/* harmony import */ var _game_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/game_state */ \"./src/game_state.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor() {\r\n        this.init_renderer();\r\n        this.init_entities();\r\n        this.init_events();\r\n        this.init_state();\r\n        this.init_controls();\r\n        this.init_animation();\r\n    }\r\n    // Setup Renderer\r\n    init_renderer() {\r\n        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({ antialias: true });\r\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\r\n        document.body.appendChild(this.renderer.domElement);\r\n    }\r\n    // Setup entities\r\n    init_entities() {\r\n        this.entities = new _entity_system__WEBPACK_IMPORTED_MODULE_2__[\"EntitySystem\"]();\r\n        this.entities.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\r\n        this.entities.camera = new _entities_camera__WEBPACK_IMPORTED_MODULE_1__[\"Camera\"]({ game: this });\r\n        this.entities.add(this.entities.camera);\r\n    }\r\n    // Setup events system\r\n    init_events() {\r\n        this.events = new _event_system__WEBPACK_IMPORTED_MODULE_3__[\"EventSystem\"]();\r\n        this.events.add(new _event__WEBPACK_IMPORTED_MODULE_4__[\"Event\"]({\r\n            'recurring': true,\r\n            'delay': 1000,\r\n            'callback': function () {\r\n                console.log('One Second Timer');\r\n            }\r\n        }));\r\n    }\r\n    // Setup game state\r\n    init_state() {\r\n        this.state = new _game_state__WEBPACK_IMPORTED_MODULE_6__[\"GameState\"](this, 'space');\r\n        this.events.add(new _event__WEBPACK_IMPORTED_MODULE_4__[\"Event\"]({\r\n            'recurring': true,\r\n            'delay': 1000,\r\n            'callback': () => {\r\n                this.state.update();\r\n            }\r\n        }));\r\n    }\r\n    // Setup controls\r\n    init_controls() {\r\n        this.controls = new _controls__WEBPACK_IMPORTED_MODULE_5__[\"Controls\"](this);\r\n    }\r\n    // Setup animation\r\n    init_animation() {\r\n        this.animate = this.animate.bind(this);\r\n        this.previous_time = 0;\r\n        this.animate(0);\r\n    }\r\n    // Animation Loop. Call update on entities and events\r\n    animate(time) {\r\n        requestAnimationFrame(this.animate);\r\n        const delta = this.get_delta(time);\r\n        this.events.update(delta);\r\n        this.entities.filter('should_update', true).forEach((entity) => {\r\n            entity.update(delta);\r\n        });\r\n        this.render();\r\n    }\r\n    // Call Render\r\n    render() {\r\n        this.renderer.render(this.entities.scene, this.entities.camera.object);\r\n    }\r\n    get_delta(time) {\r\n        const delta = (time - this.previous_time);\r\n        this.previous_time = time;\r\n        return delta;\r\n    }\r\n}\r\nconst _game = new Game();\r\nwindow.game = _game;\r\nconsole.log(_game);\r\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/game_state.ts":
/*!***************************!*\
  !*** ./src/game_state.ts ***!
  \***************************/
/*! exports provided: GameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameState\", function() { return GameState; });\n/* harmony import */ var _entities_cursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/entities/cursor */ \"./src/entities/cursor.ts\");\n/* harmony import */ var _entities_asteroid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/entities/asteroid */ \"./src/entities/asteroid.ts\");\n\r\n\r\nclass GameState {\r\n    constructor(game, type) {\r\n        this.game = game;\r\n        this.type = type;\r\n        this['init_' + this.type]();\r\n    }\r\n    update() {\r\n        this['update_' + this.type]();\r\n    }\r\n    // Space\r\n    init_space() {\r\n        // Add Cursor\r\n        this.game.entities.add(new _entities_cursor__WEBPACK_IMPORTED_MODULE_0__[\"Cursor\"]({ game: this.game }));\r\n        // Add Asteroids\r\n        let i = 5;\r\n        while (i) {\r\n            this.game.entities.add(new _entities_asteroid__WEBPACK_IMPORTED_MODULE_1__[\"Asteroid\"]({ game: this.game }));\r\n            i--;\r\n        }\r\n    }\r\n    update_space() {\r\n    }\r\n    end_space() {\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game_state.ts?");

/***/ }),

/***/ "./src/system.ts":
/*!***********************!*\
  !*** ./src/system.ts ***!
  \***********************/
/*! exports provided: System */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"System\", function() { return System; });\nclass System {\r\n    constructor() {\r\n        this.children = [];\r\n    }\r\n    add(child) {\r\n        this.children.push(child);\r\n    }\r\n    remove(child) {\r\n        this.children = this.children.filter((_child) => {\r\n            return _child !== child;\r\n        });\r\n    }\r\n    update(delta) {\r\n        this.children = this.children.filter((child) => {\r\n            return child.update(delta);\r\n        });\r\n    }\r\n    filter(prop, value) {\r\n        return this.children.filter((child) => {\r\n            return child[prop] === value;\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/system.ts?");

/***/ })

/******/ });