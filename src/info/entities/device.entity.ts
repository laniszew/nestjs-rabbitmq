import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  ID: string;

  @Column({ name: 'serial_key'})
  serialKey: string;
}
