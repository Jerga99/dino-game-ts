
import Phaser from "phaser";

class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    alert("Play Scene has been loaded!");
  }

}

export default PlayScene;
