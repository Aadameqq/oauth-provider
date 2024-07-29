import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigurationService } from './configuration/ConfigurationService';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigurationService);

    app.setGlobalPrefix('/api');

    if (configService.isDevelopment()) {
        const swaggerConfig = new DocumentBuilder()
            .setTitle(configService.get('SWAGGER_TITLE'))
            .setDescription(configService.get('SWAGGER_DESCRIPTION'))
            .build();
        const document = SwaggerModule.createDocument(app, swaggerConfig);
        SwaggerModule.setup(configService.get('SWAGGER_PATH'), app, document);
    }

    await app.listen(configService.get('PORT'));
}
bootstrap();
