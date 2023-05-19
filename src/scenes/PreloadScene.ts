
import Phaser from "phaser";
import { PRELOAD_CONFIG } from "..";

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.image("ground", "assets/ground.png");
    this.load.image("dino-idle", "assets/dino-idle-2.png");
    this.load.image("dino-hurt", "assets/dino-hurt.png");

    this.load.image("restart", "assets/restart.png");
    this.load.image("game-over", "assets/game-over.png");

    for (let i = 0; i < PRELOAD_CONFIG.cactusesCount; i++) {
      const cactusNum = i + 1;
      this.load.image(`obstacle-${cactusNum}`, `assets/cactuses_${cactusNum}.png`);
    }

    this.load.spritesheet("dino-run", "assets/dino-run.png", {
      frameWidth: 88,
      frameHeight: 94
    });

    this.load.spritesheet("dino-down", "assets/dino-down-2.png", {
      frameWidth: 118,
      frameHeight: 94
    });
  }

  create() {
    this.scene.start("PlayScene");
  }

}

export default PreloadScene;
