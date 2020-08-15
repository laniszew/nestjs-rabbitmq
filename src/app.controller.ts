import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { InfoService } from './info/info.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  fireRabbit() {
   // console.log(this.infoService);
    return this.appService.fireRabbit();
  }
}
