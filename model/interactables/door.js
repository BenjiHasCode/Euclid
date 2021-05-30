class Door extends Interactable {
    constructor (id, x, y, w, h, spritesheet, open, key) {
        super(id, x, y, w, h, spritesheet);
        this.open = open || false;
        this.key = key || undefined;
    }
}