import * as Phaser from 'phaser';
import GameScene from './GameScene';

let scene = [GameScene];

export default class Game extends Phaser.Game {

  constructor(react) {

    const config = {
      type: Phaser.AUTO,
      parent: 'gameContainer',
      width: 800,
      height: 600, 
      scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH_BOTH
      },
      render: {
        pixalArt: true
      }, 
      physics: {
        default: 'arcade', 
        arcade: {
          gravity: { y : 300},
          debug: false
        }
      },
      scene: scene 
    }

    super(config);

    this.react = react;
  }
}