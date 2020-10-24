class Player extends GameObject{
	constructor (x, y) {
		super(haroldIdle, x, y);
		this.idle = haroldIdle;
		this.walk = haroldWalk;
		this.jump = haroldJump;

		this.isWalking = false;
		this.isJumping = false;

		this.speed = 3;
	}

	draw() {
		if (this.isWalking) {
			image(this.walk, this.x, this.y);
		} else if (this.isJumping) {
			imagine(this.jump, this.x, this.y);
		} else {
			image(this.idle, this.x , this.y);
		}
	}
}