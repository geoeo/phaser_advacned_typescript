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
            this.load.image("level1", "/assets/level1.jpg", false);
            this.load.audio("music", "/assets/title.mp3", true);

            this.load.spritesheet("simon", "../assets/simon.pngs", 58, 96, 5);
        };

        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onCompleteCallback(this.startMainMenu);
        };

        Preloader.prototype.startMainMenu = function () {
            this.game.state.start("MainMenu", true, false);
        };
        return Preloader;
    })(Phaser.State);
    Castlevania.Preloader = Preloader;
})(Castlevania || (Castlevania = {}));
