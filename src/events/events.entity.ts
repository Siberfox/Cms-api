import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Base } from 'src/common/entities/base';
import { User } from 'src/auth/user.entity';
import { Screen } from 'src/screens/screens.entity';

@Entity()
export class Event extends Base {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  description: string;

  @OneToMany(() => Screen, (screen) => screen.event, { cascade: true })
  @Exclude({ toPlainOnly: true })
  screens: Screen[];

  @ManyToOne(() => User, (user) => user.events, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
