import { Module } from '@nestjs/common';
import { LanguageModule } from './language/language.module';
import { WordModule } from './word/word.module';
import { DefinitionEntity } from './definition/definition.entity';
import { LanguageEntity } from './language/language.entity';
import { WordEntity } from './word/word.entity';
import { TranslationEntity } from './translation/translation.entity';
import { PosEntity } from './pos/pos.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [DefinitionEntity, LanguageEntity, PosEntity, TranslationEntity, WordEntity],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    LanguageModule,
    WordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}