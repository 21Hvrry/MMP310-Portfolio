/*
	project 1
	9/1
*/

/* global variables */
var haroldIdle, haroldWalk;
var haroldX, haroldY
var haroldSpeed = 3

var treeImage, cloudImage;

var bgTreeX = [57, 206, 360, 528, 695, 867, 1054];
var bgTreeY = [400, 350, 350, 350, 323, 366, 366];

function preload() {
	haroldIdle = loadImage("Harold_idle.gif");
	haroldWalk = loadImage("Harold_walk.gif");
	treeImage = loadImage("tree.png")
	cloudImage = loadImage("cloud.png")
}

function setup () {
	createCanvas (1200, 600);
	haroldX = width/2;
	haroldY = height/2 + 100;
	imageMode(CENTER);
}

function draw() {
	background(196, 196, 196);
	//console.log (mouseX, mouseY);

	//loop
	for (var cloudCounter = 0; cloudCounter < 6; cloudCounter += 1) {
		image(cloudImage, cloudCounter * 250,50);

	}
	
	for (let i = 0; i < bgTreeX.length; i++){
		image(treeImage, bgTreeX[i], bgTreeY[i]);
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

	for (var x = 0; x < width + 100; x += 220) {
		image(treeImage, x, 520);
	}

}