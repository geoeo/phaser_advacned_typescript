///<reference path='./libs/jquery.d.ts'/>
///<reference path='./libs/lib.d.ts'/>
///<reference path='./libs/phaser.d.ts'/>

module Castlevania {

	export class Level1 extends Phaser.State{

		constructor(public background : Phaser.Sprite, 
					public music : Phaser.Sound, 
					public player : Castlevania.Player){
			super()
		}

		create(){

			this.background = this.add.sprite(0.0,0.0,"level1");
			this.music = this.add.audio("music",1.0,false);
			this.music.play();

			this.player = new Player(this.game, 130, 284);

		}

		update(){

			this.player.body.velocity.x = 0;
 
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
 
                this.player.body.velocity.x = -150;
                this.player.animations.play('walk');
 
                if (this.player.scale.x == 1) {
                    this.player.scale.x = -1;
                }
            }

            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
 
                this.player.body.velocity.x = 150;
                this.player.animations.play('walk');
 
                if (this.player.scale.x == -1) {
                    this.player.scale.x = 1;
                }
            }
            else {
                this.player.animations.frame = 0;
            }

		}



	}



}