export class Button {
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        width: number,
        height: number,
        title: string,
        callback?: () => void,
        fill?: number,
        fillAlpha?: number,
        textStyle?: Phaser.Types.GameObjects.Text.TextStyle
    ) {
        this.createBoxButton(scene, x, y, width, height, fill ? fill : 111, fillAlpha ? fillAlpha : 1200)
        this.setTextScene(scene, title, width, height, x, y, textStyle ? textStyle : {})
    }

    setTextScene(
        scene: Phaser.Scene,
        title: string,
        x: number,
        Y: number,
        width: number,
        height: number,
        textStyle: Phaser.Types.GameObjects.Text.TextStyle
    ) {
        scene.add
            .text(scene.cameras.main.centerX, scene.cameras.main.centerY, title)
            .setOrigin(0.5)
            .setSize(width, height)
            .setPadding({
                x: 40,
                y: 15,
            })
            .setStyle({
                ...textStyle,
            })
            .setInteractive({ useHandCursor: true })
        // .on("pointerdown", callback ? callback : () => null)
        // .on("pointerover", () => ({ fill: "#33A5E7" }))
        // .on("pointerout", () => ({ fill: "#111" }))
    }

    createBoxButton(
        scene: Phaser.Scene,
        x: number,
        y: number,
        width: number,
        height: number,
        fill: number,
        fillAlpha: number
    ) {
        scene.add.rectangle(x, y, width, height, fill, fillAlpha)
    }
}
