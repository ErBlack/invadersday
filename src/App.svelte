<script>
	import Invintation from './invitation/Invitation.svelte';
	import Game from './game/Game.svelte';
    import { gameStarted, triggerStep } from './stores';
    import { preloadAssets } from './game/Assets';
	export let start;

	let gameStartedStatus;

	gameStarted.subscribe(value => {
		gameStartedStatus = value;
	});

	triggerStep.subscribe(value => {
		if (value === 8) {
			gameStarted.set(true);
			triggerStep.set(0);
		}
	})

	preloadAssets();
</script>

{#if !gameStartedStatus}
<main>
	<Invintation start={start} />
</main>
{:else}
<section class="egg"><Game/></section>
{/if}
<style>
	main {
		font-family: 'Syne Mono', monospace;
		margin: auto;
		width: 640px;
		padding: 20px;
		max-width: calc(100vw - 40px);
		box-sizing: border-box;
		font-size: 18px;
	}

	.egg {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
		box-sizing: border-box;
	}

	@media (orientation: portrait) {
		.egg {
			width: 100vw;
			height: 100vw;
		}
	}

	@media (orientation: landscape) {
		.egg {
			width: 100vh;
			height: 100vh;
		}
	}
</style>