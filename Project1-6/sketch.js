/*

	project 1-6
	objected oriented version
	classes and objects

*/

var haroldIdle, haroldWalk, haroldJump;
var treeImage, cloudImage, signImage, defenderImage;

var trees = [];
var clouds = [];
var portals = [];
var player; 

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

	trees.push(new GameObject(treeImage, 190, 400));
	trees.push(new GameObject(treeImage, 650, 400));

	for (let x = 0; x < width + 100; x += 220) {
		let tree = new GameObject(treeImage, x, height - 100);
		trees.push(tree);
	}

	clouds.push(new Cloud(100 , 100));
	clouds.push(new Cloud(width/2 , 150));
	clouds.push(new Cloud(width - 100, 50));

	player = new Player(width / 2, height / 2);

	portals.push(new Portal("Medium v.s defender!", 500, 444, "medium"));
	portals.push(new Portal("Easy v.s defender!", 100, 444, "easy"));
	portals.push(new Portal("Hard v.s defender", 1000, 444, "hard"));

}
	

function draw() {
	background(220);
	
/* player keyboard events*/
	player.isWalking = false;
	if (keyIsDown(RIGHT_ARROW)) {
		player.x += player.speed;
		player.isWalking = true;
	}

	if (keyIsDown(LEFT_ARROW)) {
		player.x -= player.speed;
		player.isWalking = true;
	}

	if (keyIsDown(UP_ARROW)) {
		player.y -= player.y;
		player.isWalking = true;
	}

	if (keyIsDown(DOWN_ARROW)) {
		player.y += player.y;
		player.isWalking = true;
	}

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