var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function(require, exports) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, 'simon', 0);
            this.game = game;
            this.x = x;
            this.y = y;

            this.anchor.setTo(0.5, 0);

            this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);

            this.body.gravity.y = 6;
            this.body.collideWorldBounds = true;

            this.game.add.existing(this);
        }
        return Player;
    })(Phaser.Sprite);
    exports.Player = Player;
});
