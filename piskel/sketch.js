var haroldIdle;

function preload(){
	haroldIdle = loadImage("Harold_idle.gif")
}

function setup () {
	createCanvas(83, 228, 19);
}

function draw () {
	background(220);
	image(haroldIdle,0,0);
}