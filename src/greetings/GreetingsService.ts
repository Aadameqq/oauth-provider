import { GreetingsRepository } from './GreetingsRepository';
import { GreetingId } from './GreetingId';
import { GreetingNotFoundException } from './GreetingNotFoundException';

export class GreetingsService {
    public constructor(private greetingsRepository: GreetingsRepository) {}

    public async findGreeting(id: GreetingId) {
        const greeting = await this.greetingsRepository.getGreetingById(id);
        if (!greeting) {
            throw new GreetingNotFoundException();
        }

        return greeting;
    }
}
