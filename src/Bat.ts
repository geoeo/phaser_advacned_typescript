///<reference path='./libs/jquery.d.ts'/>
///<reference path='./libs/lib.d.ts'/>
///<reference path='./libs/phaser.d.ts'/>

	export class Bat extends Phaser.Sprite {

		static max_velocity : number = 40;

		constructor(public game : Phaser.Game, public x : number, public y : number){

			super(game,x,y,'bat',0);

			this.anchor.setTo(0.5,0.0);

			this.animations.add("walk",[0],10.0,true);

			this.game.add.existing(this);


		}

		public getVelocityToTarget(target : Phaser.Sprite) : Phaser.Point {

			var difference : Phaser.Point = Phaser.Point.subtract(target.position,this.position);
			return difference.normalize().multiply(Bat.max_velocity,Bat.max_velocity);

		}

	}
