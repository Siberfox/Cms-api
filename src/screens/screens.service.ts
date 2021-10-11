import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Screen } from './screens.entity';

@Injectable()
export class ScreensService extends TypeOrmCrudService<Screen> {
  constructor(@InjectRepository(Screen) repo) {
    super(repo);
  }
}
