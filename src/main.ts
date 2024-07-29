import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigurationService } from './configuration/ConfigurationService';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigurationService);
    const port = configService.get('PORT');
    await app.listen(port);
}
bootstrap();
