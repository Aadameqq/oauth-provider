import { IsEnum, IsNumber, Max, Min, validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { Environment } from './Environment';

export class EnvVariables {
    @IsNumber()
    @Min(0)
    @Max(65535)
    PORT: number;

    @IsEnum(Environment)
    NODE_ENV: Environment;
}

export const validate = (config: Record<string, unknown>) => {
    const validatedConfig = plainToInstance(EnvVariables, config, {
        enableImplicitConversion: true,
    });
    const errors = validateSync(validatedConfig, {});

    if (errors.length > 0) {
        throw new Error(errors.toString());
    }
    return validatedConfig;
};
