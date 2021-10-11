import { Exclude } from 'class-transformer';
import { Base } from 'src/common/entities/base';
import { Event } from 'src/events/events.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @OneToMany(() => Event, (event) => event.user, { cascade: true })
  events: Event[];
}
