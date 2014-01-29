///<reference path='./libs/jquery.d.ts'/>
///<reference path='./libs/lib.d.ts'/>
///<reference path='./libs/phaser.d.ts'/>

// module Castlevania{

	export class Player extends Phaser.Sprite {

		constructor(public game : Phaser.Game, public x : number, public y : number){
			super(game,x,y,'simon',0);

			// rotation anchor
			this.anchor.setTo(0.5,0);
 
            this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);

			//setup physics
            this.body.gravity.y = 6;
            this.body.collideWorldBounds = true;
 
            this.game.add.existing(this);



		}



	}

// }