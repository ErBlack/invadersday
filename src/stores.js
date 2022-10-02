import { writable } from 'svelte/store';

export const gameStarted = writable(false);

export const gameStart = () => gameStarted.set(true);
export const gameFinish = () => gameStarted.set(false);
