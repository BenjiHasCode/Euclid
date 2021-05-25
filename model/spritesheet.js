let noobSheet = new Image();
let rogueSheet = new Image();
let GUISheet = new Image();
let floorSheet = new Image();
let wallSheet = new Image();
let potionSheet = new Image();
//let doorSheet = new Image();
//let trapSheet = new Image();


class Spritesheet {
    constructor (image, timePerFrame, numberOfFrames, currentFrame, repeat) {
        this.image = image;
        this.timePerFrame = timePerFrame;   //time in ms
        this.numberOfFrames = numberOfFrames || 1; //default 1
        this.currentFrame = currentFrame || 0;
        this.deltaTimeLastSprite = Date.now();  //do we need this? can we use global delta time?
        this.repeat = repeat;
    }


    updateSpriteCounter() {
        //check if we need to update sprite - based on time
        if (Date.now() - this.deltaTimeLastSprite >= this.timePerFrame) {
            /*
            this.currentFrame++;
            this.currentFrame %= this.numberOfFrames;
            */
            if (this.currentFrame+1 != this.numberOfFrames) {
                this.currentFrame++;
            } else if (this.repeat) {
                this.currentFrame = 0;
            }
            this.deltaTimeLastSprite = Date.now();
        }
    }

    setAnimationDetails(numberOfFrames, currentFrame, repeat) {
        this.numberOfFrames = numberOfFrames;
        this.currentFrame = currentFrame;
        this.repeat = repeat;
    }
}