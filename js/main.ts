import { Scene } from 'phaser';
import { ConstantsType } from './menu';

export class Main extends Scene {
  private tempText: Phaser.GameObjects.Text;
  public CONSTANTS: ConstantsType;

  constructor() {
    super({ key: 'main' });
  }

  preload() {
    // init constants
    this.CONSTANTS = {
      HEIGHT_CENTER: this.scale.height / 2,
      WIDTH_CENTER: this.scale.width / 2,
    };
  }
  create() {
    this.tempText = this.add.text(this.CONSTANTS.WIDTH_CENTER, this.CONSTANTS.HEIGHT_CENTER, 'MAIN SCENE');
  }
  update() {}
}
