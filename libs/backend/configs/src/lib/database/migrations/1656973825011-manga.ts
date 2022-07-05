import {MigrationInterface, QueryRunner} from "typeorm";

export class manga1656973825011 implements MigrationInterface {
    name = 'manga1656973825011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manga" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying NOT NULL, "synopsis" character varying NOT NULL, "author" character varying NOT NULL, "genres" text array NOT NULL DEFAULT '{}', "view" integer DEFAULT '0', "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "originUrl" character varying NOT NULL, CONSTRAINT "PK_86e5c2b6f8bede099e2906579b4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "manga"`);
    }

}
