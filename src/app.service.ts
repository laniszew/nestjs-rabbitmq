import { Inject, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { InfoService } from './info/info.service';

@Injectable()
export class AppService {
  constructor(
    @Inject('RABBITMQ_MODULE') private readonly client: ClientProxy,
  ) {}

  getHello(): string {
    return 'app service dupa';
  }

  fireRabbit(): Observable<string> {
    const pattern = 'test';
    return this.client.send(pattern, 'whatever');
  }
}
