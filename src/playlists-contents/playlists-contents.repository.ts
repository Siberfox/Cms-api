import { EntityRepository, Repository } from 'typeorm';
import { PlaylistsContent } from './playlists-contents.entity';

@EntityRepository(PlaylistsContent)
export class PlaylistsContentsRepository extends Repository<PlaylistsContent> {}
