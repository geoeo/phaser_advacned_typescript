///<reference path='./libs/jquery.d.ts'/>
///<reference path='./libs/lib.d.ts'/>
///<reference path='./libs/phaser.d.ts'/>

import Bat = require('./Bat');
import Player = require('./Player');

// module Castlevania {

	export class Level1 extends Phaser.State{

		constructor(public background : Phaser.Sprite, 
					public music : Phaser.Sound, 
					public player : Phaser.Sprite,
                    public bat : Bat.Bat,
                    public platforms : Phaser.Group,
                    public cursors : Phaser.CursorKeys){
			super();
		}

		create(){

			this.background = this.add.sprite(0.0,0.0,"level1");
			this.music = this.add.audio("music",1.0,false);
			this.music.play();


            //  Our controls.
            this.cursors = this.game.input.keyboard.createCursorKeys();

            this.platforms = this.game.add.group();

            var ground : Phaser.Sprite = this.platforms.create(0.0,390,"platform");
            ground.alpha = 0.0;
            ground.scale.setTo(2,2);
            ground.body.immovable = true;
        

            var left_platform : Phaser.Sprite = this.platforms.create(0.0,200,"platform");
            left_platform.alpha = 0.0;
            left_platform.scale.setTo(0.98,1);
            left_platform.body.immovable = true;
            left_platform.body.allowCollision.down = false;


            var right_platform : Phaser.Sprite = this.platforms.create(495,200,"platform");
            right_platform.alpha = 0.0;
            right_platform.scale.setTo(1,1);
            right_platform.body.immovable = true;
            right_platform.body.allowCollision.down = false;


            this.player  = new Player.Player(this.game, 130, 284);
            this.bat  = new Bat.Bat(this.game,700,284);

		}

		update(){

            //  Collide the player with the platforms
            this.game.physics.collide(this.player, this.platforms);

            // Set Sprite velocities

			this.player.body.velocity.x = 0;

            var velocityToTarget : Phaser.Point = this.bat.getVelocityToTarget(this.player);

            this.bat.body.velocity.setTo(velocityToTarget.x,velocityToTarget.y);

            // Handle keyboard inputs

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

            //  Allow the player to jump if they are touching the ground.

            if (this.cursors.up.isDown && this.player.body.touching.down)
            {
                this.player.body.velocity.y = -450;
            }

		}


	}



// }