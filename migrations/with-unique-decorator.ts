import { Migration } from '@mikro-orm/migrations';

export class Migration20221228181129 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "metadata_slug" text not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
