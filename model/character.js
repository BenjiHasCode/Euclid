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
            return this.updateAction(level);
        }
    }

    updateAction(level) {
        //continue doing current action
        switch(this.state) {
            case CharacterState.MOVE:
                switch(this.direction) {
                    case Direction.UP:
                        return this.moveUp(level);
                    case Direction.LEFT:
                        return this.moveLeft(level);
                    case Direction.DOWN:
                        return this.moveDown(level);
                    case Direction.RIGHT:
                        return this.moveRight(level);
                }
                break;
        }
    }

    updateDirection() {
        //check if up, down, left or right are pressed
        if (upPressed) {
            this.direction = Direction.UP;
        } else if (downPressed) {
            this.direction = Direction.DOWN;
        } else if (leftPressed) {
            this.direction = Direction.LEFT;
        } else if (rightPressed) {
            this.direction = Direction.RIGHT
        }
    }

    moveUp(level) {
        //check if character has goal - if not assign goal, else move
        if (this.goal == undefined) {
            //define goal
            this.goal = this.y-1;

            //see if goal is valid
            if (level.tilemap.getTile(1, this.x, this.goal) != 0) {
                this.goal = undefined;
                this.state = CharacterState.IDLE;
            }
        } else {
            //move
            this.y -= .005 * (Date.now() - deltaTime);

            //check if we hit goal (or overshot)
            if(this.y <= this.goal) {
                this.y = this.goal;
                this.goal = undefined;
                return true; //return true when finished updating
            }
            return false;
        }
    }

    moveDown(level) {
        //check if character has goal - if not assign goal, else move
        if (this.goal == undefined) {
            //define goal
            this.goal = this.y+1;

            //see if goal is valid
            if (level.tilemap.getTile(1, this.x, this.goal) != 0) {
                this.goal = undefined;
                this.state = CharacterState.IDLE;
            }
        } else {
            //move
            this.y += .005 * (Date.now() - deltaTime);

            //check if we hit goal (or overshot)
            if(this.y >= this.goal) {
                this.y = this.goal;
                this.goal = undefined;
                return true;
            }
            return false;
        }
    }

    moveLeft(level) {
        //check if character has goal - if not assign goal, else move
        if (this.goal == undefined) {
            //define goal
            this.goal = this.x-1;

            //see if goal is valid
            if (level.tilemap.getTile(1, this.goal, this.y) != 0) {
                this.goal = undefined;
                this.state = CharacterState.IDLE;
            }
        } else {
            //move
            this.x -= .005 * (Date.now() - deltaTime);

            //check if we hit goal (or overshot)
            if(this.x <= this.goal) {
                this.x = this.goal;
                this.goal = undefined;
                return true;
            }
            return false;
        }
    }

    moveRight(level) {
        //check if character has goal - if not assign goal, else move
        if (this.goal == undefined) {
            //define goal
            this.goal = this.x + 1;

            //see if goal is valid
            if (level.tilemap.getTile(1, this.goal, this.y) != 0) {
                this.goal = undefined;
                this.state = CharacterState.IDLE;
            }
        } else {
            //move
            this.x += .005 * (Date.now() - deltaTime);

            //check if we hit goal (or overshot)
            if(this.x >= this.goal) {
                this.x = this.goal;
                this.goal = undefined;
                return true;
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