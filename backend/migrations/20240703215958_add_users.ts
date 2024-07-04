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

  // Create users table
  await knex.schema.createTable("users", (table) => {
    table.specificType("id", "CHAR(16)").primary();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
  });

  // Create contact_messages table
  await knex.schema.createTable("contact_messages", (table) => {
    table.specificType("id", "CHAR(16)").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.text("message").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
  });

  // Create orders table
  await knex.schema.createTable("orders", (table) => {
    table.specificType("id", "CHAR(16)").primary();
    table.specificType("userId", "CHAR(16)").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNullable();
    table.string("status").notNullable();
    table
      .foreign("userId")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });

  // Create order_items table
  await knex.schema.createTable("order_items", (table) => {
    table.specificType("id", "CHAR(16)").primary();
    table.specificType("orderId", "CHAR(16)").notNullable();
    table.specificType("productId", "CHAR(16)").notNullable();
    table.integer("quantity").notNullable();
    table.string("size").notNullable();
    table
      .foreign("orderId")
      .references("id")
      .inTable("orders")
      .onDelete("CASCADE");
    table
      .foreign("productId")
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
  });

  // Create cart_items table
  await knex.schema.createTable("cart_items", (table) => {
    table.specificType("id", "CHAR(16)").primary();
    table.specificType("productId", "CHAR(16)").notNullable();
    table.specificType("userId", "CHAR(16)").notNullable();
    table.integer("quantity").notNullable();
    table.string("size").notNullable();
    table
      .foreign("productId")
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
    table
      .foreign("userId")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  // Drop tables in reverse order
  await knex.schema.dropTableIfExists("order_items");
  await knex.schema.dropTableIfExists("orders");
  await knex.schema.dropTableIfExists("cart_items");
  await knex.schema.dropTableIfExists("contact_messages");
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("products");
}
