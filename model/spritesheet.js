const noobSheet = new Image();
const GUISheet = new Image();
const floorSheet = new Image();
const wallSheet = new Image();
const potionSheet = new Image();
const doorSheet = new Image();
const wellSheet = new Image();
const bookSheet = new Image();
const bookshelfSheet = new Image();
const bucketSheet = new Image();
const tempy = new Image();



class Spritesheet {
    constructor (image, timePerFrame, numberOfFrames, currentFrame, repeat) {
        this.image = image;
        this.timePerFrame = timePerFrame || 1000;   //time in ms
        this.numberOfFrames = numberOfFrames || 1; //default 1
        this.currentFrame = currentFrame || 0;
        this.deltaTimeLastSprite = Date.now();  //do we need this? can we use global delta time?
        this.repeat = repeat || true;
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