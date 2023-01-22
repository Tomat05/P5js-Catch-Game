class FallingObject {
    constructor() {
        this.position = createVector(100, 100);
        this.velocity = 0;

        this.active = false;
    }

    setActive() {
        this.active = true;
        this.position = createVector(random(100, windowWidth - 100), 100);
    }

    reset() {
        this.active = false;
        this.velocity = 0;
        this.position = createVector(100, 100);
    }
    
    draw() {
        push();
        noStroke();
        fill(0, 255, 0);
        circle(this.position.x, this.position.y, 75);
        pop();
    }

    updatePosition() {
        this.velocity -= (9.81 * difficulty) * (deltaTime / 1000);
        this.position.set(this.position.x, this.position.y - this.velocity);
    }

    update() {
        if (!this.active) {
            return;
        }
        this.updatePosition();
        if (this.position.y >= windowHeight + 40) {
            missed++;
            return true;
        }

        if (this.position.x > mouseX - 37.5 && this.position.x < mouseX + 37.5
            && this.position.y >= windowHeight - 125) {
            caught++;
            return true;
        }

        this.draw();
    }
}