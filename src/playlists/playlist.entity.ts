import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Base } from 'src/common/entities/base';
import { Screen } from 'src/screens/screens.entity';
import { Content } from 'src/contents/contents.entity';

@Entity()
export class Playlist extends Base {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  description: string;

  @OneToMany(() => Content, (content) => content.playlist, { cascade: true })
  @Exclude({ toPlainOnly: true })
  contents: Content[];

  @ManyToOne(() => Screen, (screen) => screen.playlists, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'screenId', referencedColumnName: 'id' })
  screen: Screen;
}
