import 'phaser';
import { Main } from './game';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  width: window.screen.width,
  height: window.screen.height,
  render: {
    pixelArt: true,
    antialias: true,
    antialiasGL: false,
  },
  physics: {
    default: 'arcade',
  },
  scene: [Main],
};

window.addEventListener('load', () => {
  new Phaser.Game(config);
});
