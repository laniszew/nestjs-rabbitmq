import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from './entities/device.entity';
import { RAM } from './entities/ram.entity';
import { Temperature } from './entities/temperature.entity';
import { CPU } from './entities/cpu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Device, CPU, RAM, Temperature])],
  controllers: [InfoController],
  providers: [InfoService],
  exports: [InfoService]
})
export class InfoModule {}
