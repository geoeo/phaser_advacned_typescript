var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './Bat', './Player'], function(require, exports, Bat, Player) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1(background, music, player, bat, platforms, cursors) {
            _super.call(this);
            this.background = background;
            this.music = music;
            this.player = player;
            this.bat = bat;
            this.platforms = platforms;
            this.cursors = cursors;
            this.score = 0;
        }
        Level1.prototype.create = function () {
            this.background = this.add.sprite(0.0, 0.0, "level1");
            this.music = this.add.audio("music", 1.0, false);
            this.music.play();

            this.cursors = this.game.input.keyboard.createCursorKeys();

            this.platforms = this.game.add.group();

            var ground = this.platforms.create(0.0, 390, "platform");
            ground.alpha = 0.0;
            ground.scale.setTo(2, 2);
            ground.body.immovable = true;

            var left_platform = this.platforms.create(0.0, 200, "platform");
            left_platform.alpha = 0.0;
            left_platform.scale.setTo(0.98, 1);
            left_platform.body.immovable = true;
            left_platform.body.allowCollision.down = false;

            var right_platform = this.platforms.create(495, 200, "platform");
            right_platform.alpha = 0.0;
            right_platform.scale.setTo(1, 1);
            right_platform.body.immovable = true;
            right_platform.body.allowCollision.down = false;

            this.player = new Player.Player(this.game, 130, 284);
            this.bat = new Bat.Bat(this.game, 700, 284);

            this.scoreText = this.game.add.text(16, 480, 'score: 0', { fontSize: '32px', fill: '#FFF' });
        };

        Level1.prototype.update = function () {
            this.game.physics.collide(this.player, this.platforms);

            this.game.physics.overlap(this.player, this.bat, this.playerBatCollisionHandler, null, this);

            this.player.body.velocity.x = 0;

            var velocityToTarget = this.bat.getVelocityToTarget(this.player);

            this.bat.body.velocity.setTo(velocityToTarget.x, velocityToTarget.y);

            this.handleUserInput();

            this.updateScore();
        };

        Level1.prototype.updateScore = function () {
            this.score += 1;
            this.scoreText.content = 'score :' + this.score;
        };

        Level1.prototype.handleUserInput = function () {
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

            if (this.cursors.up.isDown && this.player.body.touching.down) {
                this.player.body.velocity.y = -450;
            }
        };

        Level1.prototype.playerBatCollisionHandler = function (player, bat) {
            console.log('player bat collision');
            alert("Game Over!\nYour score is: " + this.score);
            this.game.state.start('GameOver', true, false);
        };
        return Level1;
    })(Phaser.State);
    exports.Level1 = Level1;
});
