import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'event' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  externalId: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  url?: string;

  @Column({ nullable: true })
  locale?: string;

  @Column()
  type: string;
}
