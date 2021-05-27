class Player {
    constructor(character, input) {
        this.character = character;
        this.inventory = []; //should inventory be refactored into character?
        this.input = input;
        /*document.addEventListener("keypress", ({key})=> {
            console.log(key);
        });*/
    }

    update(level) {
        this.character.update(level);
    }

    render(ctx, camera) {
        //render character
        this.character.render(ctx, camera);
        
        //render ui
        
        
    }

    getX() {
        return this.character.getX();
    }

    getY() {
        return this.character.getY();
    }

    setX(x) {
        this.character.setX(x);
    }

    setY(y) {
        this.character.setY(y);
    }
}