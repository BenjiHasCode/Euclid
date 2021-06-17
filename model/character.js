class Character extends Entity{
    constructor(x, y, direction, state, spritesheet) {
        super(x, y);
        this.direction = direction || Direction.RIGHT;
        this.state = state || CharacterState.IDLE;
        this.spritesheet = spritesheet;
        this.goal;
        this.inventory = [];
    }

    //returns true if itemID is found in inventory and false if not
    hasItem(itemID) {
        for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i] == itemID)
                return true;
        }

        return false;
    }

    removeFromInventory(itemID) {
        //remove item from list
        for(let i = 0; i < this.inventory.length; i++){ 
            if (this.inventory[i] == itemID) {
                //array.splice(index, how many elements to remove)
                this.inventory.splice(i, 1); 
            }
        }
    }

    update(level) {
        this.spritesheet.updateSpriteCounter();
        
        //check if character is currently doing something
        if(this.state != CharacterState.IDLE) {
            //update current action
           return this.move(level);
        }
    }

    updateDirection(direction) {
        this.direction = direction;
    }

    setGoal(level) {
        switch(this.direction) {
            case Direction.UP:
                this.goal = {x: this.x, y: this.y-1};
                break;
            case Direction.DOWN:
                this.goal = {x: this.x, y: this.y+1};
                break;
            case Direction.LEFT:
                this.goal = {x: this.x-1, y: this.y};
                break;
            case Direction.RIGHT:
                this.goal = {x: this.x+1, y: this.y};
                break;
        }

        //check if goal isn't valid
        if(level.tilemap.getTile(1, this.goal.x, this.goal.y) != 0) {
            this.goal = undefined;
            this.state = CharacterState.IDLE;
        }
        //else set state to move
        else {
            this.state = CharacterState.MOVE;
        }
    }

    move(level) {
        //if goal is not defined - try to define it
        if (this.goal == undefined){
            this.setGoal(level)
        }

        if (this.goal != undefined) {
            //move based on direction
            switch(this.direction) {
                case Direction.UP:
                    //move
                    this.y -= .005 * (Date.now() - deltaTime);
                    //check if we hit goal
                    if(this.y <= this.goal.y) {
                        this.y = this.goal.y;
                        this.goal = undefined;
                        return true; //return true when finished updating
                    }
                    break;
                case Direction.DOWN:
                    this.y += .005 * (Date.now() - deltaTime);
                    if(this.y >= this.goal.y) {
                        this.y = this.goal.y;
                        this.goal = undefined;
                        return true;
                    }
                    break;
                case Direction.LEFT:
                    this.x -= .005 * (Date.now() - deltaTime);
                    if(this.x <= this.goal.x) {
                        this.x = this.goal.x;
                        this.goal = undefined;
                        return true;
                    }
                    break;
                case Direction.RIGHT:
                    this.x += .005 * (Date.now() - deltaTime);
                    if(this.x >= this.goal.x) {
                        this.x = this.goal.x;
                        this.goal = undefined;
                        return true;
                    }
                    break;
            }
            return false;
        }
    }

    
    interact(level) {
        let x = this.x;
        let y = this.y;

        switch(this.direction) {
            case Direction.UP:
                y--;
                break;
            case Direction.LEFT:
                x--;
                break;
            case Direction.DOWN:
                y++;
                break;
            case Direction.RIGHT:
                x++;
                break;  
        }

        //check if x and y fit any interactable
        level.interactables.forEach(interactable => {
            const xCheck = (x >= interactable.x && x < interactable.x + interactable.width);
            const yCheck = (y >= interactable.y && y < interactable.y + interactable.height);
            if (xCheck && yCheck) {
                interactable.interact(level.tilemap);
                return;
            }
        });

        //check pickups
        level.items.forEach(item => {
            const xCheck = (x >= item.x && x < item.x + item.width);
            const yCheck = (y >= item.y && y < item.y + item.height);
            if (xCheck && yCheck) {
                this.inventory.push(item.interact());
                level.removeItem(item);
                return;
            }
        });

        //check if interacting with quest objects
        level.quests.forEach(quest => {
            const xCheck = (x >= quest.x && x < quest.x + quest.width);
            const yCheck = (y >= quest.y && y < quest.y + quest.height);
            if (xCheck && yCheck) {
                const temp = quest.interact(this, level.tilemap);
                //check if anything was returned
                if(temp != undefined)
                    this.inventory.push(temp);
                return;
            }
        });
    }
}