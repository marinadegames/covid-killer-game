import { Scene } from 'phaser';

export class Main extends Scene {
  // items
  skull: Phaser.Physics.Arcade.Sprite;
  covidOne: Phaser.GameObjects.Image;

  // texts
  loadingText: Phaser.GameObjects.Text;

  // constants
  HEIGHT_CENTER: number;
  WIDTH_CENTER: number;

  preload() {
    // init constants
    this.HEIGHT_CENTER = this.scale.height / 2;
    this.WIDTH_CENTER = this.scale.width / 2;

    // loading
    this.load.image('skull', 'assets/skull.png');
    this.load.image('covid-one', 'assets/covid-one.png');
  }
  create() {
    this.covidOne = this.add.sprite(this.WIDTH_CENTER, this.HEIGHT_CENTER, 'covid-one').setScale(2.5, 2.5);
    this.loadingText = this.add
      .text(this.WIDTH_CENTER, this.HEIGHT_CENTER + 150, 'LOADING...', {
        fontStyle: 'bold',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '40px',
      })
      .setOrigin(0.5, 0.5);

    this.tweens.add({
      targets: this.covidOne,
      rotation: 180,
      repeat: -1,
      duration: 100000,
    });
    this.tweens.add({
      targets: this.loadingText,
      repeat: -1,
      scaleX: 1.05,
      scaleY: 1.05,
      duration: 1000,
      yoyo: true,
      ease: 'Linear',
    });
  }
  update() {}
}
