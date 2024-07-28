import { Module } from '@nestjs/common';
import { GreetingsController } from './GreetingsController';
import { GreetingsService } from './GreetingsService';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaGreetingsRepository } from './PrismaGreetingsRepository';

@Module({
    controllers: [GreetingsController],
    providers: [
        PrismaGreetingsRepository,
        {
            provide: GreetingsService,
            useFactory: (
                repositoryImplementation: PrismaGreetingsRepository,
            ) => {
                return new GreetingsService(repositoryImplementation);
            },
            inject: [PrismaGreetingsRepository],
        },
    ],
    imports: [PrismaModule],
})
export class GreetingsModule {}
