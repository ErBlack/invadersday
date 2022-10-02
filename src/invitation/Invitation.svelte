<script>
    import Timer from './timer.svelte';
    import Links from './Links.svelte';
    import Alien from './Alien.svelte';

    export let start;
    import Trigger from '../trigger/Trigger.svelte';
</script>
<section class="content">
    <h1><Alien />invadersday</h1>
    <p class="text">
        <Trigger index={1}>I</Trigger> i<Trigger index={2}>n</Trigger><Trigger index={3}>v</Trigger>ite you to my birthd<Trigger index={4}>a</Trigger>y
        <br/><br/>
        <Trigger index={5}>d</Trigger>ate: octob<Trigger index={6}>e</Trigger>r, {start.getDate()} in {start.getHours()}:{String(start.getMinutes()).padStart(2, '0')}
        <br/>
        add<Trigger index={7}>r</Trigger>ess: <a class="pin" href="https://yandex.ru/maps/-/CCUZIMBlkA"> </a> street Rajićeva hou<Trigger index={8}>s</Trigger>e 3 apt 2a
        <br/><br/>
        <Timer start={start}/>
    </p>
    <Links/>
</section>
<style>
    h1 {
        text-align: center;
        font-size: 64px;
        margin: 0 0 1em 0;
    }

    p {
        margin: 0 0 2em 0;
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 32px;
        }
    }

    .pin::before {
        content: "📍"
    }

    .pin:hover::before {
        content: "🇷🇸";
    }
</style>