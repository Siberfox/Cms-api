import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { Playlist } from './playlist.entity';
import { PlaylistsService } from './playlists.service';

@Crud({
  model: {
    type: Playlist,
  },
  dto: {
    create: CreatePlaylistDto,
    update: UpdatePlaylistDto,
  },
  routes: {
    exclude: ['replaceOneBase', 'createManyBase'],
  },
})
@UseGuards(AuthGuard())
@ApiTags('Playlists')
@Controller('playlists')
export class PlaylistsController implements CrudController<Playlist> {
  constructor(public service: PlaylistsService) {}
}
