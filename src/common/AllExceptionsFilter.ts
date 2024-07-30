import {
    Catch,
    ExceptionFilter,
    InternalServerErrorException,
} from '@nestjs/common';

@Catch(DomainException)
export class AllExceptionsFilter implements ExceptionFilter {
    public constructor(private readonly mapping: unknown) {}

    public catch(exception: unknown) {
        // logging

        throw new InternalServerErrorException();
    }
}
