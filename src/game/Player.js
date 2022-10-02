import { IMAGES } from './Assets';

export default class Player {
    rightPressed = false;
    leftPressed = false;
    shootPressed = false;

    constructor(canvas, velocity, bulletController) {
        this.canvas = canvas;
        this.velocity = velocity;
        this.bulletController = bulletController;

        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 55;
        this.width = 49;
        this.height = 49;
        this.image = new Image();
        this.image.src = IMAGES.player;
        this.touchX = undefined;

        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
        document.documentElement.addEventListener('touchmove', this.touchmove);
        document.documentElement.addEventListener('touchstart', this.touchstart);
        document.documentElement.addEventListener('touchend', this.touchend);
        document.documentElement.addEventListener('touchcancel', this.touchend);
    }

    getBulletX() {
        return this.x + Math.floor(this.width / 2) - 1;
    }

    getBulletY() {
        return this.y - 8;
    }

    draw(ctx) {
        if (this.shootPressed) {
            this.bulletController.shoot(this.getBulletX(), this.getBulletY(), 4, 10);
        }
        this.move();
        this.collideWithWalls();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

        if (this.bulletController.isShootAvailable()) {
            ctx.fillRect(this.getBulletX(), this.getBulletY(), 3, 20);
        }
    }

    collideWithWalls() {
        //left
        if (this.x < 0) {
            this.x = 0;
        }

        //right
        if (this.x > this.canvas.width - this.width) {
            this.x = this.canvas.width - this.width;
        }
    }

    move() {
        if (this.rightPressed) {
            this.x += this.velocity;
        } else if (this.leftPressed) {
            this.x += -this.velocity;
        }
    }

    keydown = event => {
        if (event.code == 'ArrowRight') {
            this.rightPressed = true;
        }
        if (event.code == 'ArrowLeft') {
            this.leftPressed = true;
        }
        if (event.code == 'Space') {
            this.shootPressed = true;
        }
    };

    keyup = event => {
        if (event.code == 'ArrowRight') {
            this.rightPressed = false;
        }
        if (event.code == 'ArrowLeft') {
            this.leftPressed = false;
        }
        if (event.code == 'Space') {
            this.shootPressed = false;
        }
    };

    touchmove = event => {
        const touchX = event.touches[0].clientX;

        if (touchX === this.touchX) {
            this.leftPressed = false;
            this.rightPressed = false;
        } else if (touchX > this.touchX) {
            this.rightPressed = true;
            this.leftPressed = false;
        } else {
            this.leftPressed = true;
            this.rightPressed = false;
        }

        this.touchX = touchX;
    };

    touchstart = event => {
        this.shootPressed = true;
        this.touchX = event.touches[0].clientX;
    };

    touchend = () => {
        this.shootPressed = false;
        this.leftPressed = false;
        this.rightPressed = false;
        this.touchX = undefined;
    };
}
