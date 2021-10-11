import { Module } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { ContentsController } from './contents.controller';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './contents.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Content]), AuthModule],
  providers: [ContentsService],
  controllers: [ContentsController],
})
export class ContentsModule {}
