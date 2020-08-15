import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Temperature {
  @PrimaryGeneratedColumn()
  ID: string;

  @Column({ name: 'value'})
  value: string;
}
