
import Phaser from "phaser";


type Age = number;

let age: Age = 100;

declare module DinoGame {

  namespace Rendering {
    type Person = { name: string; }

    namespace Arcade {
      type Whatever  = {
        a: string;
        b: number;
      }
    }

    namespace Matter {
      type Whatever  = {
        a: number;
        b: string;
      }
    }
  }
}

type MatterWhatever = DinoGame.Rendering.Matter.Whatever;

type Person = {
  name: string;
  age: number;
  displayAge: () => void;
  getName: () => string;
  welcomePerson: (w: string) => string;
}

class PlayScene extends Phaser.Scene {

  person: Person;
  whatever: MatterWhatever;

  get gameHeight() {
    return this.game.config.height as number;
  }

  constructor() {
    super("PlayScene");
  }

  create() {
    this.createEnvironment();
    this.createPlayer();

    this.whatever = {
      a: 100,
      b: "sakdjansdkjs"
    }

    this.person = {
      name: "Filip",
      age: 32,
      displayAge() {
        console.log(this.age);
      },
      getName() {
        return this.name;
      },
      welcomePerson(welcome: string) {
        return welcome;
      }
    };
    
    this.person.displayAge();
    const name = this.person.getName();
    console.log(name);
    const welcome = this.person.welcomePerson("Hello");
    console.log(welcome);
  }

  createPlayer() {
    this.physics.add.sprite(0, this.gameHeight, "dino-idle").setOrigin(0, 1);
  }

  createEnvironment() {
    this.add
      .tileSprite(0, this.gameHeight, 88, 26, "ground")
      .setOrigin(0, 1);
  }

}

export default PlayScene;


