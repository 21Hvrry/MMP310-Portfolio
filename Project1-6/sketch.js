/*

	project 1-6
	objected oriented version
	classes and objects

*/

var haroldIdle, haroldWalk, haroldJump;
var treeImage, cloudImage, signImage, defenderImage;

var player;
var main; 

function preload() {
	haroldIdle = loadImage("Harold_idle.gif");
	haroldWalk = loadImage("Harold_walk.gif");
	haroldJump = loadImage("Harold_Jump.gif");

	defenderImage = loadImage("Defender.png");
	treeImage = loadImage("tree.png");
	cloudImage = loadImage("cloud.png");
	signImage = loadImage("Trophy.png");   
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont("Comic Sans MS");
	textAlign(CENTER, CENTER);
	imageMode(CENTER);

	player = new Player(width / 2, height / 2);
	main = new MapScene();
}
	

function draw() {
	main.draw();

	/* draw portals*/

	for (let i = 0; i < portals.length; i++) {
		portals[i].draw();

		if (portals[i].collide(player)) {
			portals[i].drawText();

			/* enter event */
			if (keyIsDown(ENTER)) {
				//change scene // 
				// portals[i].sceneToOpen//

			}
		}
	}

	player.draw();

	for (let i = 0; i < trees.length; i++) {
		trees[i].draw();
	}

	for (let i = 0; i < clouds.length; i++) {
		clouds[i].draw();
		clouds[i].update();
	}
}