import Phaser from 'phaser';

export default class Menu extends Phaser.Scene {

    constructor() {
        super({
            key:'Menu'
        });
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

        let startButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Start game', {
            fontSize: '50px',
            fontFamily: 'Arial',
            fontStyle: 'bold',
            color: '#111'
        })
            .setOrigin(0.5)
            .setPadding({
                x: 40,
                y: 15,
            })
            .setStyle(
                {
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () =>  this.scene.start("GameScene"))
            .on('pointerover', () => startButton.setStyle({ fill: '#33A5E7' }))
            .on('pointerout', () => startButton.setStyle({ fill: '#111' }))
    }

}
