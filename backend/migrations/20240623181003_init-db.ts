import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("merch_products", (table) => {
    table.specificType("id", "CHAR(16)").primary();
    table.string("name", 80).notNullable();
    table.decimal("price").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("merch_products");
}
