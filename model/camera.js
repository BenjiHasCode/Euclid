//how many tiles our camera will display in width and height
const tileWidthView = 17;
const tileHeightView = 9;

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