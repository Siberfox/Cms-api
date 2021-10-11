import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './events.entity';
import { EventsService } from './events.service';

@Crud({
  model: {
    type: Event,
  },
  dto: {
    create: CreateEventDto,
    update: UpdateEventDto,
  },
  routes: {
    exclude: ['replaceOneBase', 'createManyBase'],
  },
})
@UseGuards(AuthGuard())
@ApiTags('Events')
@Controller('events')
export class EventsController implements CrudController<Event> {
  constructor(public service: EventsService) {}
}
