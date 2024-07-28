import { GreetingId } from './GreetingId';

export class Greeting {
    public constructor(
        private id: GreetingId,
        private content: string,
    ) {}

    public compareWith(other: Greeting) {
        return other.id.toNumber() === this.id.toNumber();
    }
}
