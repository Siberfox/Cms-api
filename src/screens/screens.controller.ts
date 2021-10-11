import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { CreateScreenDto } from './dto/create-screen.dto';
import { UpdateScreenDto } from './dto/update-screen.dto';
import { Screen } from './screens.entity';
import { ScreensService } from './screens.service';

@Crud({
  model: {
    type: Screen,
  },
  dto: {
    create: CreateScreenDto,
    update: UpdateScreenDto,
  },
  routes: {
    exclude: ['replaceOneBase', 'createManyBase'],
  },
})
@UseGuards(AuthGuard())
@ApiTags('Screens')
@Controller('screens')
export class ScreensController implements CrudController<Screen> {
  constructor(public service: ScreensService) {}
}
