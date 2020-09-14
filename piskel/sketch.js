var haroldIdle;

function preload(){
	haroldIdle = loadImage("Harold_idle.gif")
}

function setup () {
	createCanvas(750, 600);
}

function draw () {
	background(220);
	image(haroldIdle,0,0);
}