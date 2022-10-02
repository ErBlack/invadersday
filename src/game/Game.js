import EnemyController from './EnemyController.js';
import Player from './Player.js';
import BulletController from './BulletController.js';

export function init(canvas) {
    const ctx = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 600;

    const playerBulletController = new BulletController(canvas, 10, 'green', true);
    const enemyBulletController = new BulletController(canvas, 4, 'black', false);
    const enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController);
    const player = new Player(canvas, 3, playerBulletController);

    let isGameOver = false;
    let didWin = false;

    function displayGameOver() {
        if (isGameOver) {
            let text = didWin ? 'You Win' : 'Game Over';
            let textOffset = didWin ? 3.5 : 5;

            ctx.fillStyle = 'black';
            ctx.font = '70px Arial';
            ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
        }
    }

    function checkGameOver() {
        if (isGameOver) {
            return;
        }

        if (enemyBulletController.collideWith(player)) {
            isGameOver = true;
        }

        if (enemyController.collideWith(player)) {
            isGameOver = true;
        }

        if (enemyController.enemyRows.length === 0) {
            didWin = true;
            isGameOver = true;
        }
    }

    return function game() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        checkGameOver();
        displayGameOver();
        if (!isGameOver) {
            enemyController.draw(ctx);
            player.draw(ctx);
            playerBulletController.draw(ctx);
            enemyBulletController.draw(ctx);
        }

        return {
            isGameOver,
            didWin,
        };
    };
}
