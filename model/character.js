class Character extends Entity{
    constructor(x, y, hp, weapon, direction) {
        super(x, y);
        this.hp = hp || 100;
        this.currentHp = hp;
        this.weapon = weapon;
        this.direction = direction || "RIGHT";
    }
}