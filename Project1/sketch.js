/*
	project 1
	9/1
*/

/* global variables */
var haroldIdle, haroldWalk;
var haroldX, haroldY
var haroldSpeed = 3

function preload() {
	haroldIdle = loadImage ("Harold_idle.gif");
	haroldWalk = loadImage ("Harold_walk.gif");
}

function setup () {
	createCanvas (750, 600);
	haroldX = width/2;
	haroldY = height/2;
	imageMode(CENTER);
}

function draw() {
	background(83, 228, 19);

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
		image(haroldWalk, haroldX, haroldY);
	}

}