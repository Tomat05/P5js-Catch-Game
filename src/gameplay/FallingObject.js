class FallingObject {
    constructor() {
        this.position = createVector(100, 100);
        this.velocity = 0;
    }
    
    draw() {
        push();
        fill(0, 255, 0);
        circle(this.position.x, this.position.y, 75);
        pop();
    }

    updatePosition() {
        this.velocity -= 9.81 * (deltaTime / 1000);
        this.position.set(this.position.x, this.position.y - this.velocity);
    }

    update() {
        this.updatePosition();
        this.draw();

        return this.position.y;
    }
}