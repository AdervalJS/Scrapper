import {MigrationInterface, QueryRunner} from "typeorm";

export class chapter1656974101362 implements MigrationInterface {
    name = 'chapter1656974101362'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chapter" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "originUrl" character varying NOT NULL, "chapterNumber" integer NOT NULL, "mangaId" integer, CONSTRAINT "PK_275bd1c62bed7dff839680614ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD CONSTRAINT "FK_4c5fd6f3063aaf78a2d13ff94f7" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chapter" DROP CONSTRAINT "FK_4c5fd6f3063aaf78a2d13ff94f7"`);
        await queryRunner.query(`DROP TABLE "chapter"`);
    }

}
