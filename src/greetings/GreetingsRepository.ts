import { GreetingId } from './GreetingId';
import { Greeting } from './Greeting';

export interface GreetingsRepository {
    getGreetingById(id: GreetingId): Promise<Greeting | false>;
}
