//as with the comment in acid.js, I'm trying to simplify the amount of code required for the developer
class Well extends Quest{
    constructor(x, y, prerequisite, reward) {
        super(x, y, 2, 2, new Spritesheet(wellSheet), prerequisite, reward);
    }

    interact(character) {
        if(!this.completed) {
            if(character.hasItem(this.prerequisite)) {
                const text = "You applied the " + getItemName(this.prerequisite) + "\n\nYou got a " + getItemName(this.reward);
                d = new Dialogue(text, TextSpeed.FAST);

                //remove item from character
                character.removeFromInventory(this.prerequisite);

                character.inventory.push(this.reward);

                //play sound
                playSound("assets/audio/water_splash.mp3", 1);

                //set quest to completed
                this.completed = true;
            } else {
                const text = "You see a well\n...\n...but no " + getItemName(this.prerequisite);
                d = new Dialogue(text, TextSpeed.FAST);
                //play well sound
                playSound("assets/audio/water_drip.mp3", 1);
            }

            gameState = GameState.DIALOGUE;  
        }
    }

    render(ctx, camera) {
        const xDrawPosition = this.x*tileWidth-camera.x;
        const yDrawPosition = this.y*tileHeight-camera.y;

        ctx.drawImage(this.spritesheet.image, 0, 0, 40, 40, xDrawPosition, yDrawPosition, tileWidth*2, tileHeight*2);
    }
}