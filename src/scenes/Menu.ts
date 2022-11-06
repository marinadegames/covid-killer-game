import Phaser from "phaser"
import { Button } from "../items/Button"

export default class Menu extends Phaser.Scene {
    constructor() {
        super({
            key: "Menu",
        })
    }

    preload() {
        this.load.image("title", "assets/covidKillerTitle.png")
    }

    create() {
        const titleGame = this.add.image(innerWidth / 2, 200, "title").setScale(0.7)

        this.tweens.add({
            targets: titleGame,
            repeat: -1,
            yoyo: true,
            duration: 1000,
            y: 240,
            ease: "Sine.inOut",
        })

        new Button(
            this,
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            280,
            80,
            "START",
            () => this.startGameHandler,
            0,
            1200,
            {
                fontSize: "30px",
                color: "White",
                fontStyle: "bold",
                fontFamily: "Arial, sans-serif",
            }
        )
    }

    startGameHandler() {
        console.log("HANDLER!")
    }
}
