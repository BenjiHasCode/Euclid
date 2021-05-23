//how many tiles our camera will display in width and height
let tileWidthView = 9;
let tileHeightView = 5;

class Camera extends Entity {
    constructor(target) {
        super(target.x, target.y);
        this.target = target;
    }

    update() {
        //set to target
        this.x = this.target.getX()*tileWidth;
        this.y = this.target.getY()*tileHeight;
        
        //center target
        this.x -= tileWidth * tileWidthView / 2;
        this.y -= tileHeight * tileHeightView / 2;
    }
}