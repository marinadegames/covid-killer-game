import { Scene } from 'phaser';
import SimpleButton from './simpleButton';
export type ConstantsType = {
  HEIGHT_CENTER: number;
  WIDTH_CENTER: number;
};

export type PosType = {
  x: number;
  y: number;
};

export class Menu extends Scene {
  // items
  skull: Phaser.Physics.Arcade.Sprite;
  covidOne: Phaser.GameObjects.Image;

  // texts
  loadingText: Phaser.GameObjects.Text;
  public CONSTANTS: ConstantsType;

  preload() {
    // init constants
    this.CONSTANTS = {
      HEIGHT_CENTER: this.scale.height / 2,
      WIDTH_CENTER: this.scale.width / 2,
    };

    // loading
    this.load.image('skull', 'assets/skull.png');
    this.load.image('covid-one', 'assets/covid-one.png');
  }
  create() {
    this.covidOne = this.add.sprite(this.CONSTANTS.WIDTH_CENTER, this.CONSTANTS.HEIGHT_CENTER / 2, 'covid-one').setScale(2.5, 2.5);
    this.loadingText = this.add
      .text(this.CONSTANTS.WIDTH_CENTER, this.CONSTANTS.HEIGHT_CENTER / 2 + 150, 'COVID KILLER', {
        fontStyle: 'bold',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '50px',
      })
      .setOrigin(0.5, 0.5);

    this.tweens.add({
      targets: this.covidOne,
      rotation: 360,
      repeat: -1,
      duration: 550000,
    });

    new SimpleButton(this, this.CONSTANTS.WIDTH_CENTER, this.CONSTANTS.HEIGHT_CENTER, 300, 60, 'START', this.startMainScene);
  }

  update() {}


  private startMainScene() {
    console.log(this.scene);
    // @ts-ignore
    this.scene.scene.start('main') as any;
  }
}
