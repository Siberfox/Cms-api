import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Content } from './contents.entity';

@Injectable()
export class ContentsService extends TypeOrmCrudService<Content> {
  constructor(@InjectRepository(Content) repo) {
    super(repo);
  }
}
