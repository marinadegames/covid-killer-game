import Container = Phaser.GameObjects.Container;
import Rectangle = Phaser.GameObjects.Rectangle;

export class Button {

    buttonContainer: Phaser.GameObjects.Container
    button: Phaser.GameObjects.Rectangle
    title: Phaser.GameObjects.Text

    constructor(
        scene: any,
        x: number,
        y: number,
        width: number,
        height: number,
        fillColor?: number,
        buttonTitle?: string,
        buttonStyle?: any
    ) {
        this.button = new Rectangle(scene, x, y, width, height, fillColor)
        this.title = new Phaser.GameObjects.Text(scene, x, y, buttonTitle ? buttonTitle : '', buttonStyle)
        this.buttonContainer = new Container(scene, x, y, [this.button, this.title])
    }
}
