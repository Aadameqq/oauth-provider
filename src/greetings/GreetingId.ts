export class GreetingId {
    public constructor(private id: number) {}

    public toNumber(): number {
        return this.id;
    }
}
