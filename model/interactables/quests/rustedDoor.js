class RustedDoor extends Quest {
    constructor(x, y, prerequisite, reward) {
        super(x, y, 1, 1, new Spritesheet(doorSheet), prerequisite, reward);
    }

    interact(character, tilemap) {
        if(!this.completed) {
            //if open - close
            if (character.hasItem(this.prerequisite)) {
                //play sound
                playSound("assets/audio/door_open.mp3", 1);
                tilemap.removeObstacle(this.x, this.y, this.width, this.height);
                this.completed = true;

                //remove item from player
                character.removeFromInventory(this.prerequisite);
            } else {
                d = new Dialogue("The door looks rusty\nBut too strong to break\nMaybe some acid\nwould help", TextSpeed.FAST);
                gameState = GameState.DIALOGUE;
            }
        }
        
    }

    render(ctx, camera) {
        const xDrawPosition = this.x*tileWidth-camera.x;
        const yDrawPosition = this.y*tileHeight-camera.y;

        if (this.completed)
            ctx.drawImage(this.spritesheet.image, 16*7, 16, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
        else
            ctx.drawImage(this.spritesheet.image, 0, 16, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
    }
}