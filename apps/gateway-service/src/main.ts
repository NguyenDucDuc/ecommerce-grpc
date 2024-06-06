import { NestFactory } from '@nestjs/core';
import { GatewayServiceModule } from './gateway-service.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(GatewayServiceModule);
  //** swagger setup */
  const config = new DocumentBuilder()
    .setTitle('Ecommerce example')
    .setDescription('The ecommerce API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //** validation setup */
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.GATEWAY_PORT, () => {
    console.log(`server running on port ${process.env.GATEWAY_PORT}`);
    console.log(`swagger: http://localhost:7000/api`);
  });
}
bootstrap();
