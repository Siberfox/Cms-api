import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistsContentsController } from './playlists-contents.controller';
import { PlaylistsContentsRepository } from './playlists-contents.repository';
import { PlaylistsContentsService } from './playlists-contents.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlaylistsContentsRepository])],
  controllers: [PlaylistsContentsController],
  providers: [PlaylistsContentsService],
})
export class PlaylistsContentsModule {}
