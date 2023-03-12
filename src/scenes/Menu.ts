import Phaser from "phaser"
import { MenuContainer } from "../containers/MenuContainer"

export default class Menu extends Phaser.Scene {
    constructor() {
        super({
            key: "Menu",
        })
    }

    preload() {
        this.load.image("title", "assets/covidKillerTitle.png")
    }

    create() {
        // button start
        this.add.container(0, 0, new MenuContainer(this))
    }

    private startGameHandler() {
        console.log("HANDLER!")
    }
}
