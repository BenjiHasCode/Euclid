class Level {
    constructor() {
        //initialize tilemap
        //place enemies
        //place pickups
        //place start pos
        //place exit
        this.tilemap = new Tilemap(10, 10);
        this.enemies = [];
        this.pickups = [];
        this.triggers = [];
    }

    render(ctx, camera) {
        this.tilemap.render(ctx, camera);
        /*this.enemies.forEach(enemy => {
            enemy.render(ctx, camera);
        });
        this.pickups.forEach(pickup => {
            pickup.render(ctx, camera);
        });*/
    }
}