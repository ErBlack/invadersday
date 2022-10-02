import { preloadImage } from '../lib/preloadImage';

export const IMAGES = {
    enemy1: '/invadersday/images/enemy1.png',
    enemy2: '/invadersday/images/enemy2.png',
    enemy3: '/invadersday/images/enemy3.png',
    player: '/invadersday/images/player.png',
};

export const preloadAssets = () => Promise.all(Object.values(IMAGES).map(preloadImage));
