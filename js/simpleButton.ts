import { ConstantsType, PosType } from './menu';

export class SimpleButton extends Phaser.GameObjects.Container {
  rectangle: Phaser.GameObjects.Graphics;
  text: Phaser.GameObjects.Text;

  constructor(public readonly scene: Phaser.Scene, posX: number, posY: number, width: number, height: number, text: string) {
    super(scene, posX, posY);

    // this.setInteractive({ cursor: 'pointer' });
    // this.on('pointerover', function () {
    //   console.log('handler');
    // });
    // this.setInteractive({ cursor: 'pointer' });

    console.group();
    console.log('x: ', posX);
    console.log('y :', posY);
    console.log('w :', width);
    console.log('h :', height);
    console.groupEnd();

    this.rectangle = this.scene.add.graphics();
    this.rectangle.lineStyle(3, 0xffffff, 1);
    this.rectangle.strokeRoundedRect(posX - width / 2, posY - height / 2, width, height, 10);

    this.text = this.scene.add
      .text(posX, posY, text, {
        fontFamily: 'Roboto, sans-serif',
        fontStyle: '900',
        fontSize: height / 2 + 'px',
      })
      .setOrigin(0.5, 0.5);
  }
}
