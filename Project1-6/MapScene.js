class MapScene {
	constructor() {
		this.background = [];
		this.foreground = [];
		this.clouds = [];
		this.portals = [];


	this.background.push(new GameObject(treeImage, 190, 400));
	this.background.push(new GameObject(treeImage, 650, 400));

	for (let x = 0; x < width + 100; x += 220) {
		let tree = new GameObject(treeImage, x, height - 100);
		this.foreground.push(tree);
	}
	
	this.clouds.push(new Cloud(100 , 100));
	this.clouds.push(new Cloud(width/2 , 150));
	this.clouds.push(new Cloud(width - 100, 50));
	
	}

	draw() {
		background(220);

		for (let i = 0; i < this.background.length; i++) {
			this.background[i].draw();
		}

		/* player keyboard events */
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
			player.y -= player.speed;
			player.isWalking = true;
		}

		if (keyIsDown(DOWN_ARROW)) {
			player.y += player.speed;
			player.isWalking = true;
		}



		/* draw portals after last player update, before player draws */
		let enterPortal;
		for (let i = 0; i < this.portals.length; i++) {
			this.portals[i].draw();

			// detect collision between portal and player
			if (this.portals[i].collide(player)) {
				this.portals[i].drawText();


				// user input
				if (keyIsDown(ENTER)) {
					enterPortal = this.portals[i].sceneToOpen;
				}
			}
		}

		if (enterPortal) {
			changeScene(enterPortal, currentScene);
		}


		player.draw();


		for (let i = 0; i < this.clouds.length; i++) {
			this.clouds[i].draw();
			this.clouds[i].update();
		}

		for (let i = 0; i < this.foreground.length; i++) {
			this.foreground[i].draw();
		}

	}
}