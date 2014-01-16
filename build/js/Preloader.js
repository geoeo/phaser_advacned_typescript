var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Castlevania;
(function (Castlevania) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader(preloadBar) {
            _super.call(this);
            this.preloadBar = preloadBar;
        }
        Preloader.prototype.preload = function () {
            this.preloadBar = this.add.sprite(200, 250, "preloadBar");
            this.load.setPreloadSprite(this.preloadBar);

            this.load.image("titlepage", "/assets/titlepage.jpg", false);
            this.load.image("logo", "/assets/logo.png", false);
            this.load.image("level1", "/assets/level1.png", false);
            this.load.image("platform", "/assets/platform.png", false);
            this.load.image("bat", "/assets/bat.png", false);
            this.load.audio("music", "/assets/title.mp3", true);

            this.load.spritesheet("simon", "/assets/simon.png", 58, 96, 5);
        };

        Preloader.prototype.create = function () {
            console.log("Preloader.ts - create");
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };

        Preloader.prototype.startMainMenu = function () {
            console.log("switching to MainMenu state");

            this.game.state.start("MainMenu", true, false);
        };
        return Preloader;
    })(Phaser.State);
    Castlevania.Preloader = Preloader;
})(Castlevania || (Castlevania = {}));
