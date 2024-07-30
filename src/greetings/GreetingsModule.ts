import { Module } from '@nestjs/common';
import { GreetingsService } from './GreetingsService';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaGreetingsRepository } from './PrismaGreetingsRepository';

@Module({
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
    exports: [GreetingsService],
})
export class GreetingsModule {}
