class Bucket extends Interactable {
    constructor(x, y, spritesheet) {
        //a bucket will be hardcoded to only fit one tile w/h
            //the intent is that the player will pick up a bucket (and can't pick up a potentially giant bucket)
        super(0, x, y, 1, 1, spritesheet);
    }
}