import 'phaser';
import { Menu } from './menu';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  width: 1920,
  height: 1080,
  scale: {
    parent: 'body',
    mode: Phaser.Scale.ENVELOP,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
  render: {
    pixelArt: true,
    antialias: true,
    antialiasGL: false,
  },
  physics: {
    default: 'arcade',
  },
  scene: [Menu],
};

window.addEventListener('load', () => {
  new Phaser.Game(config);
});
