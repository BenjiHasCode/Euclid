const Item = {
    BUCKET: 0,
    ACID: 1,
    KEY: 2,
    BOOK: 3
}

function getItemName(itemID) {
    switch(itemID) {
        case Item.BUCKET:
            return "Bucket";
        case Item.ACID:
            return "Vial of Acid";
        case Item.KEY:
            return "Key";
        case Item.BOOK:
            return "Book";
        default:
            //return "Placeholder";
            return "I have no idea what this is....";   //thought this was funnier than placeholder
    }
}


class ItemPickup extends Interactable{
    constructor(id, x, y, width, height, spritesheet) {
        super(x, y, width, height, spritesheet);
        this.id = id;
    }

    interact() {
        d = new Dialogue("You Picked Up \n\nA " + getItemName(this.id), TextSpeed.FAST);
        gameState = GameState.DIALOGUE;

        //return id to indicate what was picked up
        return this.id;
    }
}