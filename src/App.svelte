<script>
	import Invintation from './invitation/Invitation.svelte';
	export let start;
</script>

<main>
	<Invintation start={start} />
</main>

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
</style>