import {Scene} from 'phaser';
import {ConstantsType} from './menu';


export class Main extends Scene {
    public CONSTANTS: ConstantsType;
    private scoreText: Phaser.GameObjects.Text;
    public score = 0;
    public lives = 3
    public hearts: Array<Phaser.GameObjects.Image> = []
    public playerSpeed: 10;
    public virusSpeed: number = 1;
    public virusesTimer = 2000; // ms
    public viruses: Array<Phaser.GameObjects.Image> = [];
    public antibody: Phaser.GameObjects.Image;
    public virusTimerInterval: any;

    constructor() {
        super({key: 'main'});
    }

    preload() {
        // init constants
        this.CONSTANTS = {
            HEIGHT_CENTER: this.scale.height / 2,
            WIDTH_CENTER: this.scale.width / 2,
        };

        // load assets
        this.load.image("virus_red", "assets/covid-one.png");
        this.load.image("antibody", "assets/antibody.png");
        this.load.image("heart", "assets/heart.png");
    }

    create() {
        this.scoreText = this.add.text(50, 50, `SCORE: ${this.score}`, {
            fontSize: 30, fontFamily: "Roboto, sans-serif", fontStyle: 'bold'
        })
        this.antibody = this.add.image(0, 0, 'antibody')
        this.physics.add.group(this.antibody)

        // create viruses
        this.virusTimerInterval = setInterval(() => {
            this.createNewVirus()
        }, this.virusesTimer)

        // antibody move
        this.input.on('pointermove', function (pointer) {
            this.tweens.add({
                targets: [pointer, this.antibody],
                x: pointer.x,
                y: pointer.y,
                duration: 700,
                ease: "Easing.Cubic.InOut",
            }, this);
        }, this);

        // hearts lives
        this.createHearts()
    }

    update() {
        this.viruses.forEach((virus, index) => {
            virus.y -= this.virusSpeed;
            if (this.physics.collide(virus, this.antibody)) {
                virus.destroy();
                this.viruses.splice(index, 1);
                this.score += 1;
                this.scoreText.setText(`SCORE: ${this.score}`);
                this.virusesTimer = this.virusesTimer - 0.5;
                clearTimeout(this.virusTimerInterval);
                this.virusTimerInterval = setInterval(() => {
                    this.createNewVirus()
                }, this.virusesTimer)
                this.virusSpeed += 0.1;
            }
            if (virus.y <= 100) {
                virus.destroy();
                this.viruses.splice(index, 1);
                this.lives-=1
                this.createHearts()
            }
        })
        this.antibody.setPosition(this.input.mousePointer.x, this.input.mousePointer.y)

        if (this.lives <= 0 ) {
            this.gameOver()
        }

    }

    public gameOver() {
        // this.scene.start('menu')
    }

    public createNewVirus() {
        const virus = this.add.image(Math.random() * window.screen.width, window.screen.height - 50, 'virus_red');
        virus.setRotation(Math.random() * 360).setAlpha(0);
        this.add.tween({
            targets: virus,
            alpha: {
                from: 0,
                to: 1
            },
            ease: 'Easy',
            yoyo: false,
        })
        this.physics.add.group(virus)
        this.viruses.unshift(virus)
    }

    public createHearts() {
        this.hearts.forEach(heart => heart.destroy())
        this.hearts = [];
        for (let i = 0; i < this.lives; i++) {
            this.add.image(window.screen.width - 50 - (200 * i/3.5), 50, 'heart')
        }
    }
}
