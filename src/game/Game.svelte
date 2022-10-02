<script>
  import { onDestroy } from 'svelte';
  import { gameStarted, winner } from '../stores.js';
  import { init } from  './Game.js';
  import { encrypt } from '../lib/crypt';
  import { win } from '../lib/win';
  
  let canvas;
  let interval;

  onDestroy(() => clearInterval(interval));

  $: {
    if (canvas) {
      const game = init(canvas);

      const loop = () => {
        const {
          isGameOver,
          didWin
        } = game();

        if (isGameOver) {
          clearInterval(interval);

          if (didWin) {
            winner.update(value => {
              const code = value || encrypt(String(Date.now()).slice(0,-1));

              win(code);

              return code;
            });
          }

          setTimeout(() => gameStarted.set(false), 1000);
        }
      }

      interval = setInterval(loop, 1000 / 60);
    }
  }
</script>
<canvas id="game" bind:this={canvas}></canvas>
<style>
  canvas {
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
  }
</style>