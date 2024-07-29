import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './EnvVariables';
import { ConfigurationService } from './ConfigurationService';

@Module({
    imports: [ConfigModule.forRoot({ validate })],
    providers: [ConfigurationService],
    exports: [ConfigurationService],
})
export class ConfigurationModule {}
