import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GreetingsModule } from './greetings/GreetingsModule';
import { ConfigurationModule } from './configuration/ConfigurationModule';
import { GreetingsApiModule } from './greetings-api/GreetingsApiModule';
import { CommonModule } from './common/common.module';

@Module({
    imports: [
        PrismaModule,
        GreetingsModule,
        ConfigurationModule,
        GreetingsApiModule,
        CommonModule,
    ],
})
export class AppModule {}
