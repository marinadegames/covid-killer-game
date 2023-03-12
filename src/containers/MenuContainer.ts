import { ButtonStart } from "../items/ButtonStart"
import Phaser from "phaser"

export class MenuContainer extends Phaser.GameObjects.Container {
    private readonly titleImage: Phaser.GameObjects.Image | undefined
    private readonly buttonStart: Phaser.GameObjects.Container | undefined

    constructor(scene: Phaser.Scene) {
        super(scene)

        // create
        this.titleImage = scene.add.image(innerWidth / 2, 200, "title").setScale(0.7)
        this.buttonStart = scene.add.container(
            window.innerWidth / 2,
            window.innerHeight / 2,
            new ButtonStart(this.scene)
        )

        // init
        this.createTitleAnimation(this.titleImage)
        // this.buttonStart.setInteractive(new ButtonStart(scene), Phaser.Geom.Rectangle.Contains)
        // this.buttonStart.setInteractive({ cursor: "pointer" })

        // handlers
        // this.buttonStart.on(
        //     "pointerdown",
        //     () => {
        //         console.log("CLICK")
        //     },
        //     this
        // )
    }

    private createTitleAnimation(element: Phaser.GameObjects.Image): void {
        this.scene.tweens.add({
            targets: element,
            repeat: -1,
            yoyo: true,
            duration: 1000,
            y: 240,
            ease: "Sine.inOut",
        })
    }
}
