/* setup*/
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 6, 12 );

const renderer = new THREE.WebGLRenderer( { alpha : true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );

/* scene */
const width = 20;

// street 
const streetGeo = new THREE.PlaneGeometry( width, 8 );
const streetMat = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
const street = new THREE.Mesh( streetGeo, streetMat );
street.rotation.x = Math.PI * -0.5;
scene.add( street );

// sidewalk
for ( let x = -width / 2; x < width / 2; x += 1 ) {
	const geo = new THREE.BoxGeometry( 0.95, 0.1, 0.95);
	const mat = new THREE.MeshBasicMaterial( { color: 0x828282 } );
	const sidewalk1 = new THREE.Mesh( geo, mat );
	sidewalk1.position.set( x + 0.5, 0.05, -2.4 );
	scene.add( sidewalk1 );

	const sidewalk2 = new THREE.Mesh( geo, mat );
	sidewalk2.position.set( x + 0.5, 0.05, -3.5 );
	scene.add( sidewalk2 );
}

// buildings
for ( let x = width / 2; x , width / 2; x += 4){
	const w = 3.5
	const h = 4 + Math.random() * 4;
	const geo = new THREE.BoxGeometry( w, h, 5 );
	const mat = new THREE.MeshBasicMaterial( { color: 0xF1D049 } );
	const building = new THREE.Mesh( geo, mat );
	building.position.set( x + w / 2, h / 2, -6.5);
	scene.add( building );
}
 
//trees 
//const numTress = 5 + Math.random() * 5;
//for ( let i = 0; i< numTress i++);
	//const tree = new 
/* animation */
function animate() {

	controls.update();

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();