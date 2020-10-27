class Beginning extends MapScene {
	constructor() {
		super();

		this.background.push(new GameObject(treeImage, 100, 500));
		this.background.push(new GameObject(treeImage, 200, 400));
		this.background.push(new GameObject(treeImage, width - 100, 600));

		for (let x = 0; x < width + 100; x += 150) {
			let tree = new GameObject(treeImage, x, height - 100);
			this.foreground.push(tree);
		}

		this.clouds.push(new Cloud(100, 100));
		this.clouds.push(new Cloud(width/2, 150));
		this.clouds.push(new Cloud(width - 100, 50));

		let middlePortal = new Portal("Enter the forrest", width - 200, height - 200, "middle");
		this.portals.push(middlePortal);

		let snakePortal = new Portal("Fight the snakes!", 200, height - 300, "easy");
		this.portals.push(snakePortal);
		
	}

	setup() {
		player.x = width / 2;
		player.y = height / 2;
	}
}
