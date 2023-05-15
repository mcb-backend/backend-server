import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entities/tags.entity';
import { TagsService } from './tags.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Tag, //
    ]),
  ],
  providers: [
    TagsService, //
  ],
  exports: [
    TagsService, //
  ],
})
export class TagsModule {}
