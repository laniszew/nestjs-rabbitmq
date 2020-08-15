import { Controller, Get } from '@nestjs/common';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get('devices')
  async getDevice() {
    return this.infoService.findAllDevices();
  }

  @Get('CPU')
  getCpu() {

  }

  @Get('RAM')
  getRam() {
    console.log('get gowno')
    //return this.appService.getHello();
  }

  @Get('Temperature')
  getTemperature() {
    console.log('get gowno')
    //return this.appService.getHello();
  }
}
