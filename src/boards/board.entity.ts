import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './boad-status.enum';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
