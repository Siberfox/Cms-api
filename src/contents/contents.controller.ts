import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Content } from './contents.entity';
import { ContentsService } from './contents.service';
import { CreateСontentsDto } from './dto/create-content.dto';
import { UpdateСontentDto } from './dto/update-content.dto';

@Crud({
  model: {
    type: Content,
  },
  dto: {
    create: CreateСontentsDto,
    update: UpdateСontentDto,
  },
  routes: {
    exclude: ['replaceOneBase', 'createManyBase'],
  },
})
@ApiTags('Contents')
@Controller('contents')
@UseGuards(AuthGuard())
export class ContentsController implements CrudController<Content> {
  constructor(public service: ContentsService) {}
}
