import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    name: 'RABBITMQ_MODULE',
    options: {
      urls: ['amqp://192.168.99.100:5672'],
     /* queue: 'cats_queue',
      queueOptions: {
        durable: false
      }*/
    },
  });

  await app.startAllMicroservicesAsync();

  await app.listen(3001);
}
bootstrap();
