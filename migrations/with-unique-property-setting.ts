import { Migration } from '@mikro-orm/migrations';

export class Migration20221228181216 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "metadata_slug" text not null);');
    this.addSql('alter table "user" add constraint "user_metadata_slug_unique" unique ("metadata_slug");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
