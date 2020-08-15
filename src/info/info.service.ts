import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { Device } from './entities/device.entity';
import { CPU } from './entities/cpu.entity';
import { RAM } from './entities/ram.entity';
import { Temperature } from './entities/temperature.entity';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
    @InjectRepository(CPU)
    private cpuRepository: Repository<CPU>,
    @InjectRepository(RAM)
    private ramRepository: Repository<RAM>,
    @InjectRepository(Temperature)
    private temperatureRepository: Repository<Temperature>
  ) {}

  findAllDevices(): Promise<Device[]> {
    return this.deviceRepository.find();
  }

  findOneDevice(id: string): Promise<Device> {
    return this.deviceRepository.findOne(id);
  }

  insertDevice(serialKey: string): Promise<InsertResult> {
    const uuid = uuidv4();
    return this.deviceRepository.insert({ ID: uuid, serialKey });
  }

  findAllCpu(): Promise<CPU[]> {
    return this.cpuRepository.find();
  }

  findOneCpu(id: string): Promise<CPU> {
    return this.cpuRepository.findOne(id);
  }

  insertCpu(value: string): Promise<InsertResult> {
    const uuid = uuidv4();
    return this.cpuRepository.insert({ ID: uuid, value })
  }

  findAllRam(): Promise<RAM[]> {
    return this.ramRepository.find();
  }

  findOneRam(id: string): Promise<RAM> {
    return this.ramRepository.findOne(id);
  }

  insertRam(value: string): Promise<InsertResult> {
    const uuid = uuidv4();
    return this.ramRepository.insert({ ID: uuid, value })
  }

  findAllTemperature(): Promise<Temperature[]> {
    return this.temperatureRepository.find();
  }

  findOneTemperature(id: string): Promise<Temperature> {
    return this.temperatureRepository.findOne(id);
  }

  insertTemperature(value: string): Promise<InsertResult> {
    const uuid = uuidv4();
    return this.temperatureRepository.insert({ ID: uuid, value })
  }
}