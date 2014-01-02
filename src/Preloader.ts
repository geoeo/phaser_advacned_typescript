///<reference path='./libs/jquery.d.ts'/>
///<reference path='./libs/lib.d.ts'/>
///<reference path='./libs/phaser.d.ts'/>

module Castlevania {

	export class Preloader extends Phaser.State {

		constructor(public  preloadBar : Phaser.Sprite){
			super();
		}

		preload() {
			// loaded it into cache during Boot.ts execution
			this.preloadBar = this.add.sprite(200,250,"preloadBar");
			this.load.setPreloadSprite(this.preloadBar);

			// load game assets
			// override false
			this.load.image("titlepage","/assets/titlepage.jpg",false);
			this.load.image("logo","/assets/logo.png",false);
			this.load.image("level1","/assets/level1.jpg",false);
			this.load.audio("music","/assets/title.mp3",true);
			// spritesheet for main char
			this.load.spritesheet("simon","../assets/simon.pngs",58, 96, 5);

		}

		create() {
			var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
			tween.onCompleteCallback(this.startMainMenu);
		}

		startMainMenu(){

			this.game.state.start("MainMenu",true,false);

		}



	} 

}