import {MigrationInterface, QueryRunner} from "typeorm";

export class page1656974282536 implements MigrationInterface {
    name = 'page1656974282536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "page" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "pageNumber" integer NOT NULL, "chapterId" integer, CONSTRAINT "PK_742f4117e065c5b6ad21b37ba1f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "page" ADD CONSTRAINT "FK_7b944dccbe9fe2d593584c2210c" FOREIGN KEY ("chapterId") REFERENCES "chapter"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "page" DROP CONSTRAINT "FK_7b944dccbe9fe2d593584c2210c"`);
        await queryRunner.query(`DROP TABLE "page"`);
    }

}
