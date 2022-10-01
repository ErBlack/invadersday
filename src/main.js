import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        start: new Date('2022-10-15T14:00:00.000Z'),
    },
});

export default app;
