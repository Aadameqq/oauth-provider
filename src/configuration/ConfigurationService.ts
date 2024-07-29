import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { EnvVariables } from './EnvVariables';
import { Environment } from './Environment';

@Injectable()
export class ConfigurationService {
    public constructor(
        private configService: ConfigService<EnvVariables, true>,
    ) {}

    public get<T extends keyof EnvVariables>(key: T) {
        return this.configService.get(key, { infer: true });
    }

    public isDevelopment() {
        return this.get('NODE_ENV') === Environment.Development;
    }

    public isEnv(env: Environment) {
        return this.get('NODE_ENV') === env;
    }
}
