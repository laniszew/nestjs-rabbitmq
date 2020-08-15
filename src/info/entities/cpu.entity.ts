import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CPU {
  @PrimaryGeneratedColumn()
  ID: string;

  @Column({ name: 'value'})
  value: string;
