import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ScreensController } from './screens.controller';
import { Screen } from './screens.entity';
import { ScreensService } from './screens.service';

@Module({
  imports: [TypeOrmModule.forFeature([Screen]), AuthModule],
  controllers: [ScreensController],
  providers: [ScreensService],
})
export class ScreensModule {}
