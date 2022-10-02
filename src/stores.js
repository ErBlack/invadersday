import { writable } from 'svelte/store';
import { writable as localStorage } from 'svelte-local-storage-store';

export const gameStarted = writable(false);

export const gameStart = () => gameStarted.set(true);
export const gameFinish = () => gameStarted.set(false);

export const winner = localStorage(false);
