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
import { Playlist } from 'src/playlists/playlist.entity';
import { PlaylistsContent } from 'src/playlists-contents/playlists-contents.entity';

@Entity()
export class Content extends Base {
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
}
