class FallingObject {
    constructor() {
        this.position = createVector(100, 100);
        this.velocity = 0;
        this.active = false;
    }

    reset() {
        this.active = false;
        this.velocity = 0;
        this.position.set(100, 100);
    }

    setActive() {
        this.active = true;
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
        if (!this.active) {
            return;
        }
        this.updatePosition();
        this.draw();

        return this.position.y;
    }
}