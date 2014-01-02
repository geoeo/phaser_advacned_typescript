var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Castlevania;
(function (Castlevania) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1(background, music, player) {
            _super.call(this);
            this.background = background;
            this.music = music;
            this.player = player;
        }
        Level1.prototype.create = function () {
            this.background = this.add.sprite(0.0, 0.0, "level1");
            this.music = this.add.audio("music", 1.0, false);
            this.music.play();

            this.player = new Castlevania.Player(this.game, 130, 284);
        };

        Level1.prototype.update = function () {
            this.player.body.velocity.x = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.player.body.velocity.x = -150;
                this.player.animations.play('walk');

                if (this.player.scale.x == 1) {
                    this.player.scale.x = -1;
                }
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.player.body.velocity.x = 150;
                this.player.animations.play('walk');

                if (this.player.scale.x == -1) {
                    this.player.scale.x = 1;
                }
            } else {
                this.player.animations.frame = 0;
            }
        };
        return Level1;
    })(Phaser.State);
    Castlevania.Level1 = Level1;
})(Castlevania || (Castlevania = {}));
