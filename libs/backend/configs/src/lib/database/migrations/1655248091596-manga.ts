import {MigrationInterface, QueryRunner} from "typeorm";

export class manga1655248091596 implements MigrationInterface {
    name = 'manga1655248091596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "view" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "view" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "createAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "updateAt" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "updateAt" SET DEFAULT '2022-06-07 14:34:03.832681'`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "createAt" SET DEFAULT '2022-06-07 14:34:03.832681'`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "view" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "manga" ALTER COLUMN "view" SET NOT NULL`);
    }

}
