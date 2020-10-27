class Defender extends GameObject {
	constructor(x, y) {
		super(defenderImage, x, y);
		this.speed = 10;
	}

	update() {
		this.x -= this.speed;
	}
}