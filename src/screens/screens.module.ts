import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScreensController } from './screens.controller';
import { Screen } from './screens.entity';
import { ScreensService } from './screens.service';

@Module({
  imports: [TypeOrmModule.forFeature([Screen])],
  controllers: [ScreensController],
  providers: [ScreensService],
})
export class ScreensModule {}
