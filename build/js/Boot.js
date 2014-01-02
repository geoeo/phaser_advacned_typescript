var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Castlevania;
(function (Castlevania) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image("preloadBar", "/assets/loader.png");
        };

        Boot.prototype.create = function () {
            this.input.maxPointers = 1;

            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
                this.stage.scale.pageAlignHorizontally = true;
            } else {
                this.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
                this.stage.scale.minWidth = 480;
                this.stage.scale.minHeight = 260;
                this.stage.scale.maxWidth = 1024;
                this.stage.scale.maxHeight = 768;
                this.stage.scale.forceLandscape = true;
                this.stage.scale.pageAlignHorizontally = true;
                this.stage.scale.setScreenSize(true);
            }

            this.game.state.start("Preloader", true, false);
        };
        return Boot;
    })(Phaser.State);
    Castlevania.Boot = Boot;
})(Castlevania || (Castlevania = {}));
