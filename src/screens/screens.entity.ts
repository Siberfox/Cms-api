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
import { Event } from 'src/events/events.entity';
import { Playlist } from 'src/playlists/playlist.entity';

@Entity()
export class Screen extends Base {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  description: string;

  @OneToMany(() => Playlist, (playlist) => playlist.screen, { cascade: true })
  @Exclude({ toPlainOnly: true })
  playlists: Playlist[];

  @ManyToOne(() => Event, (event) => event.screens, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'eventId', referencedColumnName: 'id' })
  event: Event;
}
