import { Injectable } from '@nestjs/common';
import { Greeting } from './Greeting';
import { GreetingId } from './GreetingId';
import { GreetingsRepository } from './GreetingsRepository';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrismaGreetingsRepository implements GreetingsRepository {
    public constructor(private prismaService: PrismaService) {}

    async getGreetingById(id: GreetingId): Promise<Greeting | false> {
        const found = await this.prismaService.greeting.findUnique({
            where: { id: id.toNumber() },
        });

        if (!found) return false;

        return new Greeting(id, found.content);
    }
}
