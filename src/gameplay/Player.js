class Player {
	constructor() {
		this.position;
		this.size = 75;
	}

	setup() {
		this.position = createVector((windowWidth / 2) - (this.size / 2), windowHeight - this.size - 50);
	}

	draw() {
		push();
		fill(0);
		rect(this.position.x, this.position.y, this.size, this.size);
		pop();
	}
}