import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    RabbitmqModule,
    ClientsModule.register([
      {
        name: 'RABBITMQ_MODULE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://192.168.99.100:5672'],
        }
      }
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.99.100',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'postgres',
      autoLoadEntities: true,
      // entities: [Device],
     // synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
