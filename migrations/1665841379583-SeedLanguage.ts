import { LanguageEntity } from '../src/language/language.entity';
import { MigrationInterface, QueryRunner } from "typeorm"

export class SeedLanguage1665841379583 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            queryRunner.manager.create<LanguageEntity>(LanguageEntity, {
              code: 'tk',
              name: 'Toki Pona',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM language_entity`);
    }

}
