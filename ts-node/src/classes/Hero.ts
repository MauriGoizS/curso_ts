import powers from '../data/power';

export class Hero {
    constructor (
        public name: string,
        public powerId: number,
        public age: number
    ) {}

    get powers(): string {
        return powers.find( power => power.id === this.powerId )?.desc || 'Not found';
    }
}