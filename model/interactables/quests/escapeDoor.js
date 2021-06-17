//interacting (succesfully) with the escape door ends the game - sort of reminiscent of early 90's shooters - having a literal level end "lever"
class EscapeDoor extends Quest {
    constructor(x, y, prerequisite, reward) {
        super(x, y, 1, 1, new Spritesheet(doorSheet), prerequisite, reward);
    }

    interact(character, tilemap) {
        if(!this.completed) {
            //if player has item
            if (character.hasItem(this.prerequisite)) {
                //play sound
                playSound("assets/audio/door_open.mp3", 1);
                tilemap.removeObstacle(this.x, this.y, this.width, this.height);
                this.completed = true;

                //remove key from player
                character.removeFromInventory(this.prerequisite);

                //end game
                gameState = GameState.OVER;
                //play win sound
                playSound("assets/audio/win.mp3", .5);
            } else {
                d = new Dialogue("It's\n...\n...locked?!", TextSpeed.MEDIUM);
                gameState = GameState.DIALOGUE;
            }
        }
        
    }

    render(ctx, camera) {
        const xDrawPosition = this.x*tileWidth-camera.x;
        const yDrawPosition = this.y*tileHeight-camera.y;

        ctx.drawImage(this.spritesheet.image, 16*2, 0, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
        }
}