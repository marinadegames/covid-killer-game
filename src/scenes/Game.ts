import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image('title', 'assets/covidKillerTitle.png');
    }

    create() {
        const titleGame = this.add.image(innerWidth / 2, 200, 'title').setScale(0.7);

        this.tweens.add({
            targets: titleGame,
            repeat: -1,
            yoyo: true,
            duration: 1000,
            y: 240,
            ease: 'Sine.inOut',
        })
    }
}
