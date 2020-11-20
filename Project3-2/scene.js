/* setup */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 4, 10 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// adds shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new THREE.OrbitControls( camera, renderer.domElement );

//lighting
const ambientLight = new THREE.AmbientLight ( 0x38373D, 1.35 );
scene.add( ambientLight );

const hemiLight = new THREE.HemisphereLight ( 0xC1DAE6, 0x080820, 0.65);
scene.add( hemiLight );

const directionalLight = new THREE.DirectionalLight ( 0xD6EAFF, 0.11);
directionalLight.position.set( -1, 18, 27 );
scene.add( directionalLight );

directionalLight.castShadow = true;
directionalLight.shadow.radius = 5;
directionalLight.shadow.mapSize.width = 512; // default
directionalLight.shadow.mapSize.height = 512; // default
directionalLight.shadow.camera.near = 0.5; // default
directionalLight.shadow.camera.far = 500; // default

/* scene */
const sceneWidth = 30;

// cafeteria
const cafeteriaGeo = new THREE.PlaneGeometry( 30 , 20 );
const cafeteriaMat = new THREE.MeshStandardMaterial( { color: 0xA8A8A8, side: THREE.DoubleSide } );
cafeteriaMat.metalness = 0.3
cafeteriaMat.roughness = 0.25

const cafeteria = new THREE.Mesh( cafeteriaGeo, cafeteriaMat );
cafeteria.rotation.x = Math.PI * -0.5;

cafeteria.receiveShadow = true;
scene.add( cafeteria );

// wall 
const wallGeo = new THREE.BoxGeometry( 30, 10, 1 );
const wallMat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const wall = new THREE.Mesh( wallGeo, wallMat );

wall.receiveShadow = true;

wall.position.set( 0 , 5, -10 );
scene.add( wall );

//wall2
const wall2Geo = new THREE.BoxGeometry( 1, 10, 20 );
const wall2Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const wall2 = new THREE.Mesh( wall2Geo, wall2Mat );

wall2.receiveShadow = true;

wall2.position.set( -15 , 5, 0 );
scene.add( wall2 );

// wall3
const wall3Geo = new THREE.BoxGeometry( 1, 10, 20 );
const wall3Mat = new THREE.MeshStandardMaterial( {color: 0x5D5D5D} );
const wall3 = new THREE.Mesh( wall3Geo , wall3Mat );

wall3.receiveShadow = true;

wall3.position.set( 15, 5, 0 );
scene.add( wall3 );

// random range function
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function random( min, max ) {
    return Math.random() * ( max - min ) + min;
}
//const smoothTexture = new THREE.TextureLoader().load( 'texture/smooth.jpg' );

/* load editor scene */
const loader = new THREE.ObjectLoader();
loader.load( 'table.json', onLoad);

function onLoad( table ) {

	table.scale.set( 2.3, 2.3, 2.3 );
	table.position.set( -1, 0.02, -4.5 );

	scene.add( table );
	animate();
}

const loader1 = new THREE.ObjectLoader();
loader1.load( 'table.json', onLoad1);

function onLoad1( table ) {

	table.scale.set( 2.3, 2.3, 2.3 );
	table.position.set( 17, 0.02, -4.5 );

	scene.add( table );
	animate();
}

const loader2 = new THREE.ObjectLoader();
loader2.load( 'emergency.json', onLoad2);

function onLoad2( emergency ) {

	emergency.scale.set( 2.3, 2.3, 2.3 );
	emergency.position.set( 8, 0.02, 5 );

	scene.add( emergency );
	animate();
}

const loader3 = new THREE.ObjectLoader();
loader3.load( 'amongus.json', onLoad3);

function onLoad3( amongus ) {

	amongus.scale.set( 1.2, 1.2, 1.2);
	amongus.position.set( 3.8, 0.02, 5 );

	scene.add( amongus );
	animate();
}

const loader4 = new THREE.ObjectLoader();
loader4.load( 'amongus1.json', onLoad4);

function onLoad4( amongus1 ) {

	amongus1.scale.set( 1.2, 1.2, 1.2);
	amongus1.position.set( 0, 0.02, 1 );

	scene.add( amongus1 );
	animate();
}

const loader5 = new THREE.ObjectLoader();
loader5.load( 'amongus2.json', onLoad5);

function onLoad5( amongus2 ) {

	amongus2.scale.set( 1.2, 1.2, 1.2);
	amongus2.position.set( -3.8, 0.02, 5 );

	scene.add( amongus2 );
	animate();
}

const loader6 = new THREE.ObjectLoader();
loader6.load( 'amongus3.json', onLoad6);

function onLoad6( amongus3 ) {

	amongus3.scale.set( 1.2, 1.2, 1.2);
	amongus3.position.set( -14, 0.03, -7 );

	scene.add( amongus3 );
	animate();
}

/* animation */
function animate() {

	controls.update();

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}