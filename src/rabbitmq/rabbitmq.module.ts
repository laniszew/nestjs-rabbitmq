import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitmqController } from './rabbitmq.controller';
import { InfoModule } from '../info/info.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RABBITMQ_MODULE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://192.168.99.100:5672'],
        }
      }
    ]),
    InfoModule
  ],
  controllers: [RabbitmqController],
})
export class RabbitmqModule {};
