///<reference path='./libs/jquery.d.ts'/>
///<reference path='./libs/lib.d.ts'/>
///<reference path='./libs/phaser.d.ts'/>


	export class MainMenu extends Phaser.State {


		constructor(public background : Phaser.Sprite, public logo : Phaser.Sprite){
			// assign global vars
			super();
		}

		create(){

			console.log("MainMenu - create");

			this.background = this.add.sprite(0.0,0.0,"titlepage");
			this.background.alpha = 0;
			this.logo = this.add.sprite(this.world.centerX,-300,"logo");
			this.logo.anchor.setTo(0.5,0.5);

			this.add.tween(this.background).to({alpha:"1"},2000,Phaser.Easing.Linear.None(0.0),true);
			this.add.tween(this.logo).to({y : 220},2000,Phaser.Easing.Elastic.Out);

			this.input.onDown.addOnce(this.fadeOut,this);

		}

		fadeOut(){

			console.log("MainMenu fadeOut");

			this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
 
            tween.onComplete.add(this.startGame, this);


		}

		startGame(){

			console.log("MainMenu startGame");
			this.game.state.start("Level1",true,false);

		}



	}
