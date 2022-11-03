import Phaser from 'phaser';

export default class Game extends Phaser.Scene {

    score: number;
    stopEnable: boolean
    health: number
    covid: any
    mousePos: any

    constructor() {
        super({
            key: "GameScene",
            physics: {
              arcade: {
                  fps: 60,
                    gravity: {
                      x: 0,
                        y: 0
                    }
              }
            },
        });
        this.stopEnable = false
        this.score = 0
        this.health = 3
        this.mousePos = {
            x: 0,
            y: 0
        }

    }

    preload() {
        this.load.image('Heart', 'assets/heart.png')
        this.load.image('Covid', 'assets/covid.png')
    }


    create() {


        this.covid = this.physics.add.image(100, 100, 'Covid').setScale(0.1)

        this.add.rectangle(this.cameras.main.centerX, 0, innerWidth, 120, 0, 90)

        const heart = this.add.group()
        let count = 0

        for (let i = 0; i < this.health; i++) {
            count = count + 40
            heart.create(count, 30, 'Heart').setScale(0.03, 0.03)
        }

        this.add.text(150, 14, 'Score: ', {
            fontSize: '25px',
            fontFamily: "Arial",
            fontStyle: 'bold'
        })

        this.add.text(240, 14, String(this.score), {
            fontSize: '25px',
            fontFamily: "Arial",
            fontStyle: 'bold'
        })

        let startButton = this.add.text(this.cameras.main.width - 100, 30, this.stopEnable ? 'Start' : 'Stop', {
            fontSize: '18px',
            fontFamily: 'Arial',
            fontStyle: 'bold',
            color: '#111'
        })
            .setOrigin(0.5)
            .setPadding({
                x: 10,
                y: 5,
            })
            .setStyle(
                {
                    backgroundColor: '#ffffff',
                })
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => this.changeStop())
            .on('pointerover', () => startButton.setStyle({fill: '#33A5E7'}))
            .on('pointerout', () => startButton.setStyle({fill: '#111'}))




        console.log(this)

    }

    update() {
        this.physics.moveTo(this.covid, this.game.input.mousePointer.x, this.game.input.mousePointer.y, 1000, 400)
    }

    changeStop() {
        this.stopEnable = !this.stopEnable
        if (this.stopEnable) {
            this.scene.isActive()
        } else {
            this.scene.isPaused()
        }
    }
}
