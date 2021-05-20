class Entity {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }
}