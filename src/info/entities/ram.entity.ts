import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RAM {
  @PrimaryGeneratedColumn()
  ID: string;

  @Column({ name: 'value'})
  value: string;
}
