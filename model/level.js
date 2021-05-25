class Level {
    constructor(width, height) {
        //initialize tilemap
        this.tilemap = new Tilemap(80, 80)//40, 40);
        this.tilemap.createRoom(35, 64, 9, 5);
        this.tilemap.createVerticalHallway(38, 69, 3, 10);

        //road "stairs" - to well
            //rooms
        this.tilemap.createRoom(56, 68, 1, 1);
        this.tilemap.createRoom(56, 76, 1, 1);
        this.tilemap.createRoom(70, 74, 3, 3);
            //stairs part
        this.tilemap.createHorizontalHallway(44, 68, 13, 1);
        this.tilemap.createVerticalHallway(56, 69, 1, 8);
        this.tilemap.createHorizontalHallway(57, 76, 13, 1);

        //washroom
        this.tilemap.createRoom(43, 62, 1, 1);
        this.tilemap.createVerticalHallway(43, 62, 1,2 );
        this.tilemap.createHorizontalHallway(44, 62, 13, 1);




        //endless roundabout
        this.tilemap.createRoom(5, 5, 1, 1);
        this.tilemap.createRoom(5, 13, 1, 1);
        this.tilemap.createRoom(18, 5, 1, 1);
        this.tilemap.createRoom(18, 13, 1,1 );
        this.tilemap.createHorizontalHallway(5, 5, 14, 1);
        this.tilemap.createHorizontalHallway(5, 13, 14, 1);
        this.tilemap.createVerticalHallway(5, 6, 1, 7);
        this.tilemap.createVerticalHallway(18, 6, 1, 7);


        
        this.pickups = [];
        this.triggers = [];
        this.triggers.push(new Teleporter(63, 76, 1, 1, 50, 68));
        this.triggers.push(new Teleporter(50, 62, 1, 1, 12, 5));
        this.triggers.push(new Teleporter(12, 13, 1, 1, 12, 5));
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