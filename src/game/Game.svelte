<script>
  import { init } from  './Game.js';

  setTimeout(() => {
    const game = init();

    // setInterval(game, 1000 / 60);
    setInterval(game, 1000 / 60);
  }, 1000)

</script>
<canvas id="game"></canvas>
<style>
  canvas {
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
  }
</style>