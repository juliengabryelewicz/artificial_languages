import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialCreate1665838748093 implements MigrationInterface {
    name = 'InitialCreate1665838748093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "language_entity" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_2c1abacc8f0eff843045e4a8dd8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "word_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "languageId" integer, CONSTRAINT "PK_865c29db363288c0cb7b571419e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "translation_entity" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, CONSTRAINT "PK_d1531816d11c886ac2877566289" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pos_entity" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, CONSTRAINT "PK_beff3319aa1882ab91634e3034a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "definition_entity" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "wordId" integer, "translationId" integer, "posId" integer, CONSTRAINT "PK_51d1f9f457be15bedb82bda7c66" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "word_entity" ADD CONSTRAINT "FK_5e4f80eee37be42f882cf62b1aa" FOREIGN KEY ("languageId") REFERENCES "language_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "definition_entity" ADD CONSTRAINT "FK_c06632b22402c97c814bb6b7e0d" FOREIGN KEY ("wordId") REFERENCES "word_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "definition_entity" ADD CONSTRAINT "FK_93b7e395c70b1defb65d74d5a8c" FOREIGN KEY ("translationId") REFERENCES "translation_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "definition_entity" ADD CONSTRAINT "FK_34201e28fb255d6ffde3b01c202" FOREIGN KEY ("posId") REFERENCES "pos_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "definition_entity" DROP CONSTRAINT "FK_34201e28fb255d6ffde3b01c202"`);
        await queryRunner.query(`ALTER TABLE "definition_entity" DROP CONSTRAINT "FK_93b7e395c70b1defb65d74d5a8c"`);
        await queryRunner.query(`ALTER TABLE "definition_entity" DROP CONSTRAINT "FK_c06632b22402c97c814bb6b7e0d"`);
        await queryRunner.query(`ALTER TABLE "word_entity" DROP CONSTRAINT "FK_5e4f80eee37be42f882cf62b1aa"`);
        await queryRunner.query(`DROP TABLE "definition_entity"`);
        await queryRunner.query(`DROP TABLE "pos_entity"`);
        await queryRunner.query(`DROP TABLE "translation_entity"`);
        await queryRunner.query(`DROP TABLE "word_entity"`);
        await queryRunner.query(`DROP TABLE "language_entity"`);
    }

}
