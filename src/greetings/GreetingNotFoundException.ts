export class GreetingNotFoundException extends Error {
    public toString() {
        return GreetingNotFoundException.name;
    }
}
