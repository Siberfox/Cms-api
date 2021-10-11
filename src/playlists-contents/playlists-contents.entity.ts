import { Base } from 'src/common/entities/base';
import { Content } from 'src/contents/contents.entity';
import { Playlist } from 'src/playlists/playlist.entity';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class PlaylistsContent extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Content, (playlist) => playlist.playlistContent, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'contentId', referencedColumnName: 'id' })
  content: Content;

  @ManyToOne(() => Playlist, (playlist) => playlist.playlistContent, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'playlistId', referencedColumnName: 'id' })
  playlist: Playlist;
}
