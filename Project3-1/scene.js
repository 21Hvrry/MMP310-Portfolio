/* setup */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 4, 10 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );

/* scene */
const sceneWidth = 30;

// cafeteria
const cafeteriaGeo = new THREE.PlaneGeometry( 30 , 20 );
const cafeteriaMat = new THREE.MeshBasicMaterial( { color: 0xA8A8A8, side: THREE.DoubleSide } );
const cafeteria = new THREE.Mesh( cafeteriaGeo, cafeteriaMat );
cafeteria.rotation.x = Math.PI * -0.5;
scene.add( cafeteria );

// wall1 
const wall1Geo = new THREE.BoxGeometry( 30, 15, 1 );
const wall1Mat = new THREE.MeshBasicMaterial( {color: 0x515151, side: THREE.DoubleSide} );
const wall1 = new THREE.Mesh( wall1Geo, wall1Mat );
wall1.position.set( 0 , 7.5, -10 );
scene.add( wall1 );

//wall2
const wall2Geo = new THREE.BoxGeometry( 1, 15, 20 );
const wall2Mat = new THREE.MeshBasicMaterial( {color: 0x515151, side: THREE.DoubleSide} );
const wall2 = new THREE.Mesh( wall2Geo, wall2Mat );
wall2.position.set( -15 , 7.5, 0 );
scene.add( wall2 );

// ship wings 1
const wing1Geo = new THREE.BoxGeometry( 1, 15, 20 );
const wing1Mat = new THREE.MeshBasicMaterial( {color: 0x5D5D5D, side: THREE.DoubleSide} );
const wing1 = new THREE.Mesh( wing1Geo , wing1Mat );
wing1.position.set( 15, 7.5, 0 );
scene.add( wing1 );

// random range function
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function random( min, max ) {
    return Math.random() * ( max - min ) + min;
}

/* load editor scene */
const loader = new THREE.ObjectLoader();
loader.load( 'scene_2.json', onLoad);

function onLoad( table ) {

	table.scale.set( 2, 2, 2 );
	table.position.set( -2.0, 0.02, 0 );

	scene.add( table );
	animate();
}

const loader1 = new THREE.ObjectLoader();
loader1.load( 'scene_3.json', onLoad1);

function onLoad1( amongus ) {

	amongus.scale.set( 1.2, 1.2, 1.2);
	amongus.position.set( 3.5, 0.02, 0 );

	scene.add( amongus );
	animate();
}

const loader2 = new THREE.ObjectLoader();
loader2.load( 'scene.json', onLoad);

function onLoad( emergency ) {

	emergency.scale.set( 2, 2, 2 );
	emergency.position.set( 0, 0.02, 0 );

	scene.add( emergency );
	animate();
}

/* animation */
function animate() {

	controls.update();

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}