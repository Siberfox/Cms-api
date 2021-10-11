import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { ContentsModule } from './contents/contents.module';
import { ScreensModule } from './screens/screens.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'Cms',
      password: 'Cms',
      database: 'Cms',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    EventsModule,
    ScreensModule,
    PlaylistsModule,
    ContentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
