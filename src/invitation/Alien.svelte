<script>
    import { gameStarted, winner } from '../stores';


    let winCode;

    winner.subscribe(value => {
        winCode = value;
    });

    const onClick = () => {
        if (winCode) {
            gameStarted.set(true);
        }
    }
</script>

<button on:click={onClick} class:active={Boolean(winCode)}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" version="1.0" viewBox="0 0 32 32"><path d="m23.4 4-.6.4c-.2.2-.2.3-.2 1.3 0 1.5 0 1.4 1.5 1.5 1.7 0 1.7 0 1.7-1.4 0-1.3 0-1.5-.7-1.7a4 4 0 0 0-1.7 0z"/><path d="M6.3 4.3c-.2.1-.2.2-.3 1.4 0 1.5 0 1.5 1.2 1.6H9v2.5H7.4L6 10l-.3.5.1 1.8c0 .1-.1.2-1 .2-1.1 0-1.1 0-1.4.4-.2.3-.2.3-.2 1.4v1l-.2.1-1.3.2c-.9 0-1.2 0-1.3.2-.1.1-.2.6-.2 4.1v4l.3.2c.2.2.3.3 1.5.2 1 0 1.2 0 1.4-.3.2-.2.2-.2.1-.7l-.1-1v-.5h2.3l.1 1 .1 1.3c.1.2.8.4 1.2.3H8l.5-.1v1c0 1.2 0 1.5.7 1.8.2.1.5.2 2 .2 2.2 0 3.4-.2 3.7-.6.2-.2.3-.3.3-1.1 0-1.1-.2-1.6-.7-1.8l-2.7-.2c-2 0-2.4 0-2.4-.2v-1c-.2-.5-.1-.7 0-.7l2.7-.1a377.2 377.2 0 0 0 10.5 0h.4v1.2c0 1 0 1.2-.2 1.1a31.7 31.7 0 0 0-5.7 0c-.2 0-.2.4-.2 1.4 0 2 .1 2 2 1.7a41.9 41.9 0 0 1 4.4-.4v-2.2l.7-.2h1.4l.6.2.4-.3c.2-.3.3-.4.2-1.3 0-1.2-.2-1 1.3-1.2h.8v1.3c0 1.8 0 1.7 1.6 1.7 1 0 1.3 0 1.5-.2l.2-.2v-3.8l.2-4c.1-.4 0-.8-.2-1h-1.6l-1.3-.1V13c.2-.3.1-.4 0-.6-.2-.2-.3-.2-1.5-.1H26v-.2l-.1-1.3c0-.7-.2-1-.3-1.1l-1.3-.1H23V8.3c0-1 0-1.2-1.2-1.4h-1.3c-.5.2-.5.5-.5 1.6v1h-4.5a11 11 0 0 1-3.4 0h-.5V7.3c-.3-.2-1.5-.5-2.1-.4-.4 0-.4 0-.4-.3L9 5.4C9 4.2 8.9 4.2 7.5 4.1c-.8 0-1 0-1.2.2zm16.5 8.6v1.2l.2 1.2c0 .3-.1.3-1.1.4-.8 0-1 0-1.3-.2-.3-.2-.3-.2-.3-.6l.2-1.8 1-.2a80.7 80.7 0 0 0 1.3 0zm-11.4.4c.2.4.2 1.8 0 2.1-.2.2-.3.2-1 .2l-1.2-.1c-.2-.2-.2-.2-.1-1.3 0-.5 0-1 .2-1.1h1c.9 0 1 0 1 .2z"/></svg></button>

<style>
    button {
        border: none;
        padding: none;
        background: none;
        display: inline;
        vertical-align: middle;
        margin-right: .25em;
        font-size: inherit;
        color: inherit;
        cursor: text;
    }

    .active {
        color: gold;
        cursor: pointer;
        animation: slidein ease-in-out 5s infinite;
    }

    @keyframes slidein {
        0% {
            transform: translate(0%) scale(1) rotate(0);
            
        }
        10% {
            transform: translate(1%, 2%) scale(1.01) rotate(3deg);
        }
        20% {
            transform: translate(2%, 7%) scale(1.03) rotate(3deg);
        }
        30% {
            transform: translate(-5% 8%) scale(1.06) rotate(4deg);
        }
        40% {
            transform: translate(8%, 1%) scale(1.1) rotate(-3deg);
        }
        50% {
            transform: translate(2%, -7%) scale(1.05) rotate(-5deg);
        }
        60% {
            transform: translate(3%, 1%) scale(1.02) rotate(-2deg);
        }
        70% {
            transform: translate(-8%, 7%) scale(1.1) rotate(2deg);
        }
        80% {
            transform: translate(2%, 6%) scale(1.03) rotate(-2deg);
        }
        90% {
            transform: translate(7%, 2%) scale(1.02) rotate(3deg);
        }
    }

</style>