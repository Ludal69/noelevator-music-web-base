import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // Create products table
  await knex.schema.createTable("products", (table) => {
    table.specificType("id", "CHAR(16)").primary();
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.decimal("price", 10, 2).notNullable();
    table.integer("quantity").notNullable();
    table.string("imageUrl").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNullable();
  });

  // Create cart_items table
  await knex.schema.createTable("cart_items", (table) => {
    table.specificType("id", "CHAR(16)").primary();
    table.specificType("productId", "CHAR(16)").notNullable();
    table.integer("quantity").notNullable();
    table
      .foreign("productId")
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  // Drop cart_items table first due to foreign key constraint
  await knex.schema.dropTable("cart_items");

  // Drop products table
  await knex.schema.dropTable("products");
}
