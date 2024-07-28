import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GreetingsModule } from './greetings/GreetingsModule';

@Module({
    imports: [PrismaModule, GreetingsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
