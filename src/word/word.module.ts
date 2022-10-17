import { Module } from '@nestjs/common';
import { WordController } from './word.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordEntity } from './word.entity';
import { WordService } from './word.service';


@Module({
  imports: [TypeOrmModule.forFeature([WordEntity])],
  providers: [WordService],
  controllers: [WordController]
})
export class WordModule {}
