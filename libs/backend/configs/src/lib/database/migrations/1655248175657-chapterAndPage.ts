import {MigrationInterface, QueryRunner} from "typeorm";

export class chapterAndPage1655248175657 implements MigrationInterface {
    name = 'chapterAndPage1655248175657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "page" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "pageNumber" integer NOT NULL, "chapterId" integer, CONSTRAINT "PK_742f4117e065c5b6ad21b37ba1f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chapter" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "originUrl" character varying NOT NULL, "chapterNumber" integer NOT NULL, "mangaId" integer, CONSTRAINT "PK_275bd1c62bed7dff839680614ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "view" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "view" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "createAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "updateAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "page" ADD CONSTRAINT "FK_7b944dccbe9fe2d593584c2210c" FOREIGN KEY ("chapterId") REFERENCES "chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD CONSTRAINT "FK_4c5fd6f3063aaf78a2d13ff94f7" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chapter" DROP CONSTRAINT "FK_4c5fd6f3063aaf78a2d13ff94f7"`);
        await queryRunner.query(`ALTER TABLE "page" DROP CONSTRAINT "FK_7b944dccbe9fe2d593584c2210c"`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "updateAt" SET DEFAULT '2022-06-07 14:34:03.832681'`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "createAt" SET DEFAULT '2022-06-07 14:34:03.832681'`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "view" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "view" SET NOT NULL`);
        await queryRunner.query(`DROP TABLE "chapter"`);
        await queryRunner.query(`DROP TABLE "page"`);
    }

}
