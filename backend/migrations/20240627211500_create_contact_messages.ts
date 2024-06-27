import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("contact_messages", (table) => {
    table.specificType("id", "CHAR(16)").primary();
    table.string("name", 80).notNullable();
    table.string("email", 80).notNullable();
    table.text("message").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("contact_messages");
}
