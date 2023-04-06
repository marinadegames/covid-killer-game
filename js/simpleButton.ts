class SimpleButton extends Phaser.GameObjects.Container {
  private text: Phaser.GameObjects.Text;
  private background: Phaser.GameObjects.Rectangle;

  constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, text: string) {
    super(scene, x, y);

    this.createText(scene, text);
    this.createBg(scene, width, height);
  }

  private createBg(scene: Phaser.Scene, width: number, height: number) {
    this.background = new Phaser.GameObjects.Rectangle(scene, 0, 0, width, height, 0x000000);
    this.background.setOrigin(0.5, 0.5);
    this.background.setStrokeStyle(3, 0xffffff);

    this.add(this.background);
    this.add(this.text);
    this.setSize(width, height);
    this.setInteractive({ useHandCursor: true });

    // handlers
    this.on('pointerover', () => {
      this.background.setFillStyle(0xffffff);
      this.text.setColor('0x000');
    });
    this.on('pointerout', () => {
      this.background.setFillStyle(0x000);
      this.text.setColor('#ffffff');
    });
    this.on('pointerdown', () => {
      this.callback(scene);
    });

    // add to scene
    scene.add.existing(this);
  }

  private callback(scene: any) {
    scene.start('main');
  }

  private createText(scene: Phaser.Scene, text: string) {
    this.text = new Phaser.GameObjects.Text(scene, 0, 0, text, {
      color: '#FFFFFF',
      fontSize: '24px',
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'bold',
    }).setOrigin(0.5, 0.5);
  }
}

export default SimpleButton;
