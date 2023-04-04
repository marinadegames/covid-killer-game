import { Scene } from 'phaser';

export class Main extends Scene {
  skull: Phaser.Physics.Arcade.Sprite;

  preload() {
    this.load.image('skull', 'assets/skull.png');
  }
  create() {
    this.skull = this.physics.add.sprite(250, 170, 'skull').setScale(0.2, 0.2);
  }
  update() {
    this.skull.angle++;
  }
}
