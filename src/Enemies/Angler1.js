class Angler1 extends Enemy {
    constructor(game) {
        super(game);
        this.width = 238;
        this.height = 170;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('angler1');
        this.frameY = Math.floor(Math.random() * 2);
        this.lives = 5;
        this.score = this.lives;
    }
}