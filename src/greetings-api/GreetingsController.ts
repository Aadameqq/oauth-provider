import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
} from '@nestjs/common';
import { GreetingsService } from '../greetings/GreetingsService';
import { GreetingNotFoundException } from '../greetings/GreetingNotFoundException';
import { GreetingId } from '../greetings/GreetingId';

@Controller('greetings')
export class GreetingsController {
    public constructor(private greetingsService: GreetingsService) {}

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number) {
        const greetingId = new GreetingId(id);
        try {
            return await this.greetingsService.findGreeting(greetingId);
        } catch (ex) {
            if (ex instanceof GreetingNotFoundException) {
                throw new NotFoundException();
            }
            throw ex;
        }
    }

    @Post('')
    public async create() {
        // TODO:
    }
}
