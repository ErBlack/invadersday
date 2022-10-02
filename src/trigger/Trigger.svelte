<script>
    import { triggerStep } from '../stores';
    import { makeStep } from './logic';


    export let index;
    let currentStep;

    triggerStep.subscribe(value => {
        currentStep = value;
    });

    const onClick = () => currentStep >= index || makeStep(index);
</script>

<button class:active={currentStep >= index} on:click={onClick}><slot></slot></button>

<style>
    button {
        margin: 0;
        padding: 0;
        border: none;
        background: none;
        display: inline;
        font: inherit;
        color: inherit;
        cursor: text;
    }

    button:hover, .active {
        color: var(--accent-color);
    }
</style>