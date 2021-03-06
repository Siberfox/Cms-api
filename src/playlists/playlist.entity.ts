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
import { Screen } from 'src/screens/screens.entity';
import { Content } from 'src/contents/contents.entity';
import { PlaylistsContent } from 'src/playlists-contents/playlists-contents.entity';

@Entity()
export class Playlist extends Base {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  description: string;

  @OneToMany(
    () => PlaylistsContent,
    (playlistContent) => playlistContent.playlist,
    { cascade: true },
  )
  @Exclude({ toPlainOnly: true })
  playlistContent: PlaylistsContent[];

  @ManyToOne(() => Screen, (screen) => screen.playlists, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'screenId', referencedColumnName: 'id' })
  screen: Screen;
}
