var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'Boot', 'Preloader', 'MainMenu', 'Level1'], function(require, exports, Boot, Preloader, MainMenu, Level1) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot.Boot, false);
            this.state.add('Preloader', Preloader.Preloader, false);
            this.state.add('MainMenu', MainMenu.MainMenu, false);
            this.state.add('Level1', Level1.Level1, false);

            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    exports.Game = Game;

    $('document').ready(function () {
        console.log("start game");
        new Game();
    });
});
