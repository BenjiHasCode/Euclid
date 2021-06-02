//a "quest", for lack of a better word, is an interactle object
//that will search the players inventory when interacted with, to see if player has item
//if player has item, reward him (with another item - like a well with bucket lets you hoist something up)
class Quest extends Interactable {
    constructor(x, y, width, height, spritesheet, prerequisite, reward) {
        super(x, y, width, height, spritesheet);
        this.prerequisite = prerequisite;
        this.reward = reward;
        this.completed = false;
    }
}