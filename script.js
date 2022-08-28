let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#FFF',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

let covids;
let cursors;
let player;

let game = new Phaser.Game(config)

function preload() {
    this.load.image('player', 'assets/player.png')
    this.load.image('covid', 'assets/covid.png')
    this.load.image('bg', 'assets/bg.jpeg')
}

function create() {
    this.add.image(400, 300, 'bg')

    // player
    player = this.physics.add.sprite(100, 500, 'player')
    player.setScale(0.5)
    player.setBounce(0.5)

    player.setCollideWorldBounds(true)

    // covids
    covids = this.physics.add.group({
        key: 'covid',
        repeat: 8,
        setXY: {x: 50, y: 500, stepX: 100}
    })

    // collision
    this.physics.add.collider(player, covids, killCovid, null, this)

    // cursor
    cursors = this.input.keyboard.createCursorKeys()

    // tween
    this.tweens.add({
        targets: player,

        ease: 'Power',
    });

}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-250)
        player.angle = player.angle - 12
    } else if (cursors.right.isDown) {
        player.setVelocityX(250)
        player.angle += 12
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-350)
    }

    player.setFriction(player.friction - 0.5)

}

function killCovid(player, covid) {
    // covid.disableBody(true, true)
}
