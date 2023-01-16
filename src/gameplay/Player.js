class Player {
	constructor() {
		this.size = 75;
        this.position = createVector(0, windowHeight - this.size - 50);
	}

    updatePlayerPos(){
        this.position = createVector(0, windowHeight - this.size - 50);
    }

    // handles drawing character sprite to screen
	draw() {
		push();
		fill(255);
		rect(this.position.x, this.position.y, this.size, this.size);
		pop();
	}

    // handles movement
    move() {
        // Boundary checking
        let x = (mouseX < this.size / 2 ? 0 : (mouseX > windowWidth - (this.size / 2) ? (windowWidth - this.size) : mouseX - (this.size / 2)));
        
        this.position.set(x, this.position.y);
    }

    // main update function for Player
    onFrameUpdate() {
        this.move();
        this.draw();
    }
}