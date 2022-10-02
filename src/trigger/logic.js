import { triggerStep } from '../stores';

export function makeStep(i) {
    triggerStep.update(current => (current + 1 === i ? i : 0));
}
