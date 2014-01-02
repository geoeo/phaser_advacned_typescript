var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Castlevania;
(function (Castlevania) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu(background, logo) {
            _super.call(this);
            this.background = background;
            this.logo = logo;
        }
        MainMenu.prototype.create = function () {
            console.log("MainMenu - create");

            this.background = this.add.sprite(0.0, 0.0, "titlepage");
            this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, -300, "logo");
            this.logo.anchor.setTo(0.5, 0.5);

            this.add.tween(this.background).to({ alpha: "1" }, 2000, Phaser.Easing.Linear.None(0.0), true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out);

            this.input.onDown.addOnce(this.fadeOut, this);
        };

        MainMenu.prototype.fadeOut = function () {
            console.log("MainMenu fadeOut");

            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

            tween.onComplete.add(this.startGame, this);
        };

        MainMenu.prototype.startGame = function () {
            console.log("MainMenu startGame");
            this.game.state.start("Level1", true, false);
        };
        return MainMenu;
    })(Phaser.State);
    Castlevania.MainMenu = MainMenu;
})(Castlevania || (Castlevania = {}));
