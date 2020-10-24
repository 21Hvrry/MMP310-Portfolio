class Portal extends GameObject{
	constructor(message, x, y, sceneToOpen) {
		super(signImage, x, y);
		this.message = message;
		this.sceneToOpen = sceneToOpen;
	}

	drawText(){
		fill(0);
		textSize(15);
		textAlign (CENTER);
		text(this.message, this.x - this.width/2 + 20, this.y - this.height/2, this.width - 40, this.height - 60);
		textSize(9.5);
		text("Hit Enter to Play", this.x, this.y);
	}
}