import {
    Controller,
    Get,
    InternalServerErrorException,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
} from '@nestjs/common';
import { GreetingsService } from './GreetingsService';
import { GreetingNotFoundException } from './GreetingNotFoundException';
import { GreetingId } from './GreetingId';

const exceptionMapping = {
    [GreetingNotFoundException.name]: new NotFoundException(),
};

@Controller('greetings')
export class GreetingsController {
    public constructor(private greetingsService: GreetingsService) {}

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number) {
        const greetingId = new GreetingId(id);

        try {
            return await this.greetingsService.findGreeting(greetingId);
        } catch (ex) {
            const matchedEx = exceptionMapping[ex.toString()];
            if (!matchedEx) {
                console.error(ex);
                throw new InternalServerErrorException();
            }
            throw matchedEx;
        }
    }

    @Post('')
    public async create() {
        // TODO:
    }
}
