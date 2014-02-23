/**
 * Created by marchaubenstock on 23/02/2014.
 */
///<reference path='./libs/jquery.d.ts'/>
///<reference path='./libs/lib.d.ts'/>
///<reference path='./libs/phaser.d.ts'/>

export class GameOver extends Phaser.State {

    constructor(){
        super();
    }

    create(){

        console.log('Game Over!');

    }
}
