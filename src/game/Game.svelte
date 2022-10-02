<script>
  import { onDestroy } from 'svelte';
    import { gameFinish, winner } from '../stores.js';
  import { init } from  './Game.js';
  
  let canvas;
  let interval;

  onDestroy(() => clearInterval(interval));

  $: {
    console.log(canvas);

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
            winner.set(true);
          }

          gameFinish();
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