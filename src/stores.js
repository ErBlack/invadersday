import { writable } from 'svelte/store';
import { writable as localStorage } from 'svelte-local-storage-store';

export const gameStarted = writable(false);

export const triggerStep = writable(0);

export const winner = localStorage('winner');
