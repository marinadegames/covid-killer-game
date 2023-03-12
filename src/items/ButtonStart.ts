import Graphics = Phaser.GameObjects.Graphics

interface sizesType {
    width: number
    height: number
    x: number
    y: number
}

export class ButtonStart extends Phaser.GameObjects.Container {
    public title: Phaser.GameObjects.Text

    public rectangle: Graphics

    private sizes: sizesType

    constructor(scene: Phaser.Scene) {
        super(scene)
        scene.scale.updateBounds()

        // init sizes
        this.sizes = {
            width: 300,
            height: 100,
            x: window.innerWidth / 2 - 150,
            y: window.innerHeight / 2 - 50,
        }
        this.width = this.sizes.width
        this.height = this.sizes.height

        // creators
        this.title = this.titleCreator(scene, "START")
        this.rectangle = this.rectangleCreator(scene)

        // added into container
        this.add(this.title)

        // handlers
        this.setInteractive()
        this.setInteractive({ cursor: "pointer" })
    }

    private rectangleCreator(scene: Phaser.Scene) {
        const rect = scene.add.graphics()
        rect.fillStyle(0xffffff, 0.9)
        rect.fillRoundedRect(this.sizes.x, this.sizes.y, this.sizes.width, this.sizes.height, 15)
        return rect
    }

    private titleCreator(scene: Phaser.Scene, title: string) {
        return new Phaser.GameObjects.Text(scene, 0, 0, title, {
            fontSize: "40px",
            fontFamily: "Roboto, sans-serif",
            fontStyle: "bold",
            color: "0x000",
        }).setOrigin(0.5, 0.5)
    }
}
