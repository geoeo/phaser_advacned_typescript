///<reference path='./libs/jquery.d.ts'/>
///<reference path='./libs/lib.d.ts'/>
///<reference path='./libs/phaser.d.ts'/>

// module Castlevania {

	export class Boot extends Phaser.State {
		
		preload() {

			this.load.image("preloadBar","/assets/loader.png");
			console.log("Boot.preload");

		}

		create() {

			// Only use > 1 for multitouch
			this.input.maxPointers = 1;

			//  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
			this.stage.disableVisibilityChange = true;

			if(this.game.device.desktop){
				this.stage.scale.pageAlignHorizontally = true;

				} 
			else {
				// mobile setup here
				//  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
				this.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
				this.stage.scale.minWidth = 480;
				this.stage.scale.minHeight = 260;
				this.stage.scale.maxWidth = 1024;
				this.stage.scale.maxHeight = 768;
				this.stage.scale.forceLandscape = true;
				this.stage.scale.pageAlignHorizontally = true;
				this.stage.scale.setScreenSize(true);
			}

			// clear world true, clear cache no. (Would make loaded assets useless)
			this.game.state.start("Preloader",true,false);

		}

	}

// }