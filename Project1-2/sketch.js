/*
	project 1
	9/1
*/

/* global variables */
var haroldIdle, haroldWalk;
var haroldX, haroldY
var haroldSpeed = 3
var treeImage, cloudImage;

function preload() {
	haroldIdle = loadImage("Harold_idle.gif");
	haroldWalk = loadImage("Harold_walk.gif");
	treeImage = loadImage("tree.png")
	cloudImage = loadImage("cloud.png")
}

function setup () {
	createCanvas (1200, 600);
	haroldX = width/2;
	haroldY = height/2;
	imageMode(CENTER);
}

function draw() {
	background(196, 196, 196);

	//loop
	for (var cloudCounter = 0; cloudCounter < 5; cloudCounter += 1) {
		image(cloudImage, cloudCounter * 150,100);
		image(cloudImage, cloudCounter * 125+100,175);

	}
	for (var x = 0; x < width; x += 100) {
		image(treeImage, x, 450);
	}


	//character
	var haroldIsWalking = false

	if (keyIsDown(RIGHT_ARROW))
	{
		haroldX += haroldSpeed;
		haroldIsWalking = true;
	}
	if (keyIsDown(LEFT_ARROW))
	{
		haroldX -= haroldSpeed;
		haroldIsWalking = true;
	}
	if (keyIsDown(UP_ARROW))
	{
		haroldY -= haroldSpeed;
		haroldIsWalking = true;
	}
	if (keyIsDown(DOWN_ARROW))
	{
		haroldY += haroldSpeed;
		haroldIsWalking = true;
	}

	if (haroldIsWalking) {
		image(haroldWalk, haroldX, haroldY);
	} else {
		image(haroldIdle, haroldX, haroldY);
	}

	for (var x = 0; x < width; x += 50) {
		image(treeImage, x, 550);
	}

}