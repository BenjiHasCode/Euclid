class Level {
    constructor(width, height) {
        //initialize tilemap
        this.tilemap = new Tilemap(width, height);
        //interactables are just game objects that the player can interact with - such as a door
        this.interactables = [];

        //teleporters - teleports players
        this.teleporters = [];

        //items are interactables that the player can interact with (pickup) and will then dissappear from the "world"
        this.items = [];

        //objects that the player can interact with, but will do something if the player has a specifi item
        this.quests = [];
    }


    update(player) {
        //check if player is activating any of the teleporters
        this.teleporters.forEach(trigger => {
            trigger.update(player);
        });
    }


    render(ctx, camera) {
        //render tiles
        this.tilemap.render(ctx, camera);
        
        //render interactables
        this.interactables.forEach(interactable => {
            interactable.render(ctx, camera);
        }); 
        
        //render "pickups"
        this.items.forEach(item => {
            item.render(ctx, camera);
        });

        //render qust objects
        this.quests.forEach(quest => {
            quest.render(ctx, camera);
        });

        //render teleporters if debug is enabled
        if (debug)
            this.teleporters.forEach(trigger => trigger.render(ctx, camera));
    }


    removeItem(item) {
        //remove item from list
        for(let i = 0; i < this.items.length; i++){ 
            if (this.items[i].x == item.x && this.items[i].y == item.y) {
                //array.splice(index, how many elements to remove)
                this.items.splice(i, 1); 
            }
        }

        //clear from logic layer
        this.tilemap.removeObstacle(item.x, item.y, item.width, item.height);
    }

    //add value to given list and set the logic layer to 1 (occupied)
    addToLevel(list, value) {
        list.push(value);

        //add value to tilemap logic layer - collision
        this.tilemap.addObstacle(value.x, value.y, value.width, value.height);
    }
}