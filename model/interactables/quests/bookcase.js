//this quest is ab out opening a secret door
class Bookcase extends Quest {
    constructor(x, y, prerequisite, reward) { //in this case reward has to be a door
        super(x, y, 1, 1, new Spritesheet(bookshelfSheet), prerequisite, reward)
    }

    interact(character, tilemap) {
        if(!this.completed) {
            if(character.hasItem(this.prerequisite)) {
                this.reward.locked = false;
                this.reward.interact(tilemap);

                //remove book from player
                character.removeFromInventory(this.prerequisite);

                this.completed = true;
            } else {
                d = new Dialogue("It Seems Like A Book Is \nMissing...", TextSpeed.FAST);
                gameState = GameState.DIALOGUE;
            }
        }
    }

    render(ctx, camera) {
        const xDrawPosition = this.x*tileWidth-camera.x;
        const yDrawPosition = this.y*tileHeight-camera.y-tileHeight;

        ctx.drawImage(this.spritesheet.image, 60, 75, 30, 50, xDrawPosition, yDrawPosition, tileWidth, tileHeight*2);
    }
}