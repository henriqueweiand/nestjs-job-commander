import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'event' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
