class Level {
    constructor() {
        this.tilemap = 0;
        this.enemies = [];
        this.pickups = [];
    }

    render(ctx, camera) {
        this.tilemap.render(ctx, camera);
        this.enemies.forEach(enemy => {
            enemy.render(ctx, camera);
        });
        this.pickups.forEach(pickup => {
            pickup.render(ctx, camera);
        });
    }
}