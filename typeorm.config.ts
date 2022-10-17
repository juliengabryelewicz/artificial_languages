import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DefinitionEntity } from './src/definition/definition.entity';
import { LanguageEntity } from './src/language/language.entity';
import { WordEntity } from './src/word/word.entity';
import { TranslationEntity } from './src/translation/translation.entity';
import { PosEntity } from './src/pos/pos.entity';
 
config();
 
const configService = new ConfigService();
 
export default new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: +configService.get<number>('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [DefinitionEntity, LanguageEntity, PosEntity, TranslationEntity, WordEntity],
  synchronize: false,
  migrations: ['migrations/*.ts'],
});