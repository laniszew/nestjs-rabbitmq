
import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { InfoService } from '../info/info.service';

@Controller()
export class RabbitmqController {
  constructor(
    @Inject('RABBITMQ_MODULE')
    private readonly client: ClientProxy,
    private readonly infoService: InfoService

  ) {}

  @MessagePattern('test')
  async whatever() {
    await this.infoService.insertDevice('from_rabbit');
    console.log('rabbitmq controller dupa');
    return 'dupa';
  }
}
