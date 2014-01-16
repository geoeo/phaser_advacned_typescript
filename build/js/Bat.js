var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Castlevania;
(function (Castlevania) {
    var Bat = (function (_super) {
        __extends(Bat, _super);
        function Bat(game, x, y) {
            _super.call(this, game, x, y, 'bat', 0);
            this.game = game;
            this.x = x;
            this.y = y;

            this.anchor.setTo(0.5, 0.0);

            this.animations.add("walk", [0], 10.0, true);

            this.game.add.existing(this);
        }
        Bat.prototype.getVelocityToTarget = function (target) {
            var difference = Phaser.Point.subtract(target.position, this.position);
            return difference.normalize().multiply(Bat.max_velocity, Bat.max_velocity);
        };
        Bat.max_velocity = 20;
        return Bat;
    })(Phaser.Sprite);
    Castlevania.Bat = Bat;
})(Castlevania || (Castlevania = {}));
