/* 
	project 1-5
	scene management + game scene
*/

/* global variables */
var haroldIdle, haroldWalk, haroldJump;
var haroldX, haroldY;
var haroldMainX, haroldMainY;
var haroldSpeed = 3;

// game physics
var groundY = 200;
var GRAVITY = 2; // acceleration 2 pix per frame
var haroldYSpeed = 2;
var haroldIsJumping = false;

var treeImage, cloudImage, signImage, defenderImage;

var bgTreeX = [57, 180, 360, 528, 695, 880, 1111, 1307];
var bgTreeY = [400, 320, 380, 310, 340, 360, 396, 373];

var cloudPositions = [
	[57,79],
	[242,148],
	[475,25],
	[750,150],
	[1025,126],
	[393,98],
	[130, 35],
	[1189,65],
];

var defenderPosition = []; 

var scene = "main"; // game, win, lose
var bgColor = 'lightblue';
var minDefenders = 3;
var maxDefenders = 6;

function preload() {
	haroldIdle = loadImage("Harold_idle.gif");
	haroldWalk = loadImage("Harold_walk.gif");
	haroldJump = loadImage("Harold_jump.gif");

	defenderImage = loadImage("Defender.png");
	treeImage = loadImage("tree.png");
	cloudImage = loadImage("cloud.png");
	signImage = loadImage("Trophy.png");   
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	haroldX = width/2;
	haroldY = height/2 + 100;
	imageMode(CENTER);
}

function draw() {
	// scene manager
	if (scene == 'main') {
		main();
	}
	else if (scene == 'game') {
		game();
	}
	else if (scene == 'win') {
		win();
	}
	else if (scene == 'lose') {
		lose();
	}
}


// scene functions

function setupMain() {
	haroldX = haroldMainX;
	haroldY = haroldMainY;
	scene = 'main';
}

function main() {
	background(220);
	// console.log(mouseX, mouseY);

	// setting background

	// loop
	for (var x = 0; x < width + 100; x += 220) {
		image(treeImage, x, 420);
	}

	clouds();

	/* logic + events */
	/* character movement */

	var haroldIsWalking = false;

	if (keyIsDown(RIGHT_ARROW)) {
		haroldX += haroldSpeed;
		haroldIsWalking = true;
	}

	if (keyIsDown(LEFT_ARROW)) {
		haroldX -= haroldSpeed;
		haroldIsWalking = true;
	}

	if (keyIsDown(UP_ARROW)) {
		haroldY -= haroldSpeed;
		haroldIsWalking = true;
	}

	if (keyIsDown(DOWN_ARROW)) {
		haroldY += haroldSpeed;
		haroldIsWalking = true;
	}

	/* signs */
	sign("Medium v.s defender!", 500, 444, 'lightblue', 3, 6);
	sign("Easy v.s defender!", 100, 444, 'purple', 7, 10);
	sign("Hard v.s defender", 1000, 444 , 'darkblue', 11, 15);

	/* draw character image */
	if (haroldIsWalking) {
		image(haroldWalk, haroldX, haroldY);
	} else {
		image(haroldIdle, haroldX, haroldY);
	}


	// foreground
	for (var x = 0; x < width + 100; x += 220) {
		image(treeImage, x, 550);
	}
}

function setupGame(fromMain, bg, min, max) {

	bgColor = bg;
	minDefenders = min;
	maxDefenders = max;

	
	if (fromMain) {
		haroldMainX = haroldX;
		haroldMainY = haroldY;
	}

	
	haroldX = 200;
	haroldY = height - groundY;

	// add objects
	defenderPositions = []; // reset all defender positions
	var defenderNumber = random(minDefenders, maxDefenders);
	for (let i = 0; i < defenderNumber; i++) {
		// add an x positoin for a new defender half a canvas away from one another + random value
		defenderPositions.push( random(width/2, width) + i * width / 2 );
	}

	scene = 'game';
}

function game() {
	background(bgColor);
	noStroke();
	fill('lightgreen');
	rect(0, height - groundY, width, groundY);

	clouds();

	/* jumping and falling */
	// apply gravity
	if (haroldY < height - groundY) {
		haroldYSpeed += GRAVITY;
	} else {
		// harold on the ground
		haroldYSpeed = 0;
		haroldIsJumping = false;
	}

	// 32 is space
	if (!haroldIsJumping && keyIsDown(32)) {
		haroldYSpeed = -30;
		haroldIsJumping = true;
	}

	haroldY += haroldYSpeed;

	if (haroldIsJumping) {
		image(haroldJump, haroldX, haroldY);
	} else {
		image(haroldWalk, haroldX, haroldY);
	}

	for (let i = 0; i < defenderPositions.length; i++) {
		let x = defenderPositions[i];
		defender(x);// draw defender and detect player collision
		defenderPositions[i] -= 10;

		// if harold gets past last defender
		if (i == defenderPositions.length - 1 && haroldX > x) {
			scene = 'win';
		}
	}
}

function win() {
	textSize(100);
	fill('white');
	text('You win!', width / 2, height / 2);

	textSize(50);
	text('Hit M to Return to Map', width / 2, height / 2 + 100);

	// m key
	if (keyIsDown(77)) {
		setupMain();
	}
}

function lose() {
	textSize(100);
	fill('white');
	text('You Got Tackled!', width / 2, height / 2);

	textSize(50);
	text('Hit R to Try Again', width / 2, height / 2 + 100);

	// r key
	if (keyIsDown(82)) {
		setupGame(false, bgColor, minDefenders, maxDefenders);
	}
}

// game object functions 

function sign(msg, x, y, bg, min, max) {
	image(signImage, x, y);

	// 2d collision between player (harold) and sign 
	
	if (haroldX - haroldIdle.width / 2 < x + signImage.width / 2 &&
		haroldX + haroldIdle.width / 2 > x - signImage.width / 2 &&
		haroldY - haroldIdle.height / 2 < y + signImage.height / 2 &&
		haroldY + haroldIdle.height / 2 > y - signImage.height / 2) {

		fill(0);
		textFont("Comic Sans MS");
		textSize(15);
		textAlign(CENTER, CENTER);
		text(msg, x - signImage.width/2 + 20, y - signImage.height/2, signImage.width - 40, signImage.height - 60);

		textSize(9.5);
		text("Hit Enter to Play", x, y);
		textAlign (CENTER);
		// enter event
		if (keyIsDown(ENTER)) {
			setupGame(true, bg, min, max);
		}
	}
}

function clouds() {
	for (let i = 0; i < cloudPositions.length; i++) {
		image(cloudImage, cloudPositions[i][0], cloudPositions[i][1]);

		// animate the clouds
		cloudPositions[i][0] += 2; // increase x
		if (cloudPositions[i][0] > width + cloudImage.width / 2) {
			cloudPositions[i][0] = -cloudImage.width / 2;
		}

		cloudPositions[i][1] += random(-1, 1); // random y
	}
}

function defender(x) {
	let y = height - groundY;
	image(defenderImage, x, y);

	// collision
	if (haroldX - haroldIdle.width / 5 < x + defenderImage.width / 5 &&
		haroldX + haroldIdle.width / 5 > x - defenderImage.width / 5 &&
		haroldY - haroldIdle.height / 3 < y + defenderImage.height / 3 &&
		haroldY + haroldIdle.height / 3 > y - defenderImage.height / 3) {

		// change the scene
		scene = 'lose';

	}
}