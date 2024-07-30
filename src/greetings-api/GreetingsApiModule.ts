import { Module } from '@nestjs/common';
import { GreetingsController } from './GreetingsController';
import { GreetingsModule } from '../greetings/GreetingsModule';

@Module({
    imports: [GreetingsModule],
    controllers: [GreetingsController],
})
export class GreetingsApiModule {}
