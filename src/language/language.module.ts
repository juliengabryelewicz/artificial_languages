import { Module } from '@nestjs/common';
import { LanguageController } from './language.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageEntity } from './language.entity';
import { LanguageService } from './language.service';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageEntity])],
  providers: [LanguageService],
  controllers: [LanguageController]
})
export class LanguageModule {}
