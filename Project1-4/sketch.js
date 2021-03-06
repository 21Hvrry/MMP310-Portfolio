/*
	project 1
	9/1
*/

/* global variables */
var haroldIdle, haroldWalk;
var haroldX, haroldY
var haroldSpeed = 3

var treeImage, cloudImage, signImage;

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

function preload() {
	haroldIdle = loadImage("Harold_idle.gif");
	haroldWalk = loadImage("Harold_walk.gif");
	treeImage = loadImage("tree.png")
	cloudImage = loadImage("cloud.png")
	signImage = loadImage("Trophy.png")
}

function setup () {
	createCanvas (windowWidth, windowHeight);
	haroldX = width/2;
	haroldY = height/2 + 100;
	imageMode(CENTER);
}

function sign(msg, x, y){
	image(signImage, x, y);

	//2d colliso=ion between player and sign
	if (haroldX - haroldIdle.width / 2 < x + signImage.width / 2 && 
		haroldX + haroldIdle.width / 2 > x - signImage.width / 2 &&
		haroldY - haroldIdle.height / 2 < y + signImage.height / 2 &&
		haroldY + haroldIdle.height / 2 > y - signImage.height / 2
		){	
	fill(0);
	textFont("Yanone Kaffeesatz");
	textSize(16);
	textAlign(CENTER);
	text(msg, x, y);

	}

}

function draw() {
	background(196, 196, 196);
	//console.log (mouseX, mouseY);

	//loop
	
	for (let i = 0; i < bgTreeX.length; i++){
		image(treeImage, bgTreeX[i], bgTreeY[i]);
	}

	for (let i = 0; i < cloudPositions.length; i++) { 
		image(cloudImage, cloudPositions[i][0], cloudPositions[i][1]);

		cloudPositions[i][0] += 3; //increase x
		if (cloudPositions[i][0] > width + cloudImage.width) {
			cloudPositions[i][0] = -cloudImage.width;
		}

		cloudPositions[i][1] += random(-1, 1); //random y
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

	/*sign*/
	sign("Save!", 120, 510);
	sign("Start Here!", 569, 406);
	sign("Hint!", 1209, 507);


	if (haroldIsWalking) {
		image(haroldWalk, haroldX, haroldY);
	} else {
		image(haroldIdle, haroldX, haroldY);
	}

	for (var x = 0; x < width + 100; x += 220) {
		image(treeImage, x, 580);
	}

}