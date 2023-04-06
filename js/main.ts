import { Scene } from 'phaser';

export class Main extends Scene {
  private tempText: string;

  constructor() {
    super({ key: 'main' });
  }

  preload() {}
  create() {
    // this.tempText = this.add.text()
  }
  update() {}
}
