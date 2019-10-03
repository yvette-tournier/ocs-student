export function dnaCost(baseCost: number, ...sequence: string[]) {

    return baseCost + sequence.join('').length;
}
