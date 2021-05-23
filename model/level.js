class Level {
    constructor() {
        //initialize tilemap
        //place enemies
        //place pickups
        //place start pos
        //place exit
        this.tilemap = new Tilemap(10, 4)//40, 40);
        this.enemies = [];
        this.pickups = [];
        this.triggers = [];
       // this.triggers.push(new Teleporter(2, 1, 1, 8, 7, 1));
    }

    update(player) {
        this.triggers.forEach(trigger => {
            trigger.update(player);
        });
    }

    render(ctx, camera) {
        this.tilemap.render(ctx, camera);
        /*this.enemies.forEach(enemy => {
            enemy.render(ctx, camera);
        });
        this.pickups.forEach(pickup => {
            pickup.render(ctx, camera);
        });*/

        //render triggers if debug is enabled
        if (debug)
            this.triggers.forEach(trigger => trigger.render(ctx, camera));
    }

    //generates and returns a level
   /* generateLevel() {
        //generate tilemap
        this.tilemap.generate();
            //generate rooms, hallways, .. domes?
            //find player entrance
            //add player exit
        //apply enemies
        //add pickups
    }*/
}