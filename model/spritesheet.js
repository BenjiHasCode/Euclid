let noobSheet = new Image();
let GUISheet = new Image();
let floorSheet = new Image();
let wallSheet = new Image();
let potionSheet = new Image();
let doorSheet = new Image();
let wellSheet = new Image();
let bookSheet = new Image();
let bookshelfSheet = new Image();
let bucketSheet = new Image();


class Spritesheet {
    constructor (image, timePerFrame, numberOfFrames, currentFrame, repeat) {
        this.image = image;
        this.timePerFrame = timePerFrame || 1000;   //time in ms
        this.numberOfFrames = numberOfFrames || 1; //default 1
        this.currentFrame = currentFrame || 0;
        this.deltaTimeLastSprite = Date.now();  //do we need this? can we use global delta time?
        this.repeat = repeat ||true;
    }


    updateSpriteCounter() {
        //check if we need to update sprite - based on time
        if (Date.now() - this.deltaTimeLastSprite >= this.timePerFrame) {
            this.currentFrame++;
            this.currentFrame %= this.numberOfFrames;
            this.deltaTimeLastSprite = Date.now();
        }
    }

    setAnimationDetails(numberOfFrames, currentFrame, repeat) {
        this.numberOfFrames = numberOfFrames;
        this.currentFrame = currentFrame;
        this.repeat = repeat;
    }
}