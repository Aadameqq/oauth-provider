import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GreetingsModule } from './greetings/GreetingsModule';
import { ConfigurationModule } from './configuration/ConfigurationModule';

@Module({
    imports: [PrismaModule, GreetingsModule, ConfigurationModule],
})
export class AppModule {}
