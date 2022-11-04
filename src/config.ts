import Phaser from 'phaser';
import Menu from "./scenes/Menu";
import Game from "./scenes/Game";


export default {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  scale: {
    width: innerWidth,
    height: innerHeight,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [
      Game,
      Menu,
  ]
};
