import { Greeter } from './index';

describe('Greeter', () => {

    it('can be instantiated', () => {

        const greeter = new Greeter('Alex');

        expect(greeter).toBeDefined();
        expect(greeter.greet()).toBe('Hello Alex');
    });
});