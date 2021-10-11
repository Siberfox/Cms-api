import { Module } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { ContentsController } from './contents.controller';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './contents.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Content])],
  providers: [ContentsService],
  controllers: [ContentsController],
})
export class ContentsModule {}
