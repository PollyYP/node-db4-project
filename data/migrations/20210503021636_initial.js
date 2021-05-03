exports.up = async function (knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("recipe_id");
    table.text("recipe_name").notNullable().unique();
    table
      .dateTime("created_at")
      .notNull()
      .defaultTo(knex.raw("current_timestamp"));
  });

  await knex.schema.createTable("steps", (table) => {
    table.increments("step_id");
    table
      .integer("recipe_id")
      .references("recipe_id")
      .inTable("Recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.integer("step_number").notNullable();
    table.text("step_instructions").notNullable();
  });

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("ingredient_id");
    table.text("ingredient_name").notNullable().unique();
  });

  await knex.schema.createTable("proportions", (table) => {
    table.increments("proportion_id");
    table
      .integer("ingredient_id")
      .references("ingredient_id")
      .inTable("Ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("step_id")
      .references("step_id")
      .inTable("Steps")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.integer("quantity_oz").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("proportions");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("steps");
  await knex.schema.dropTableIfExists("recipes");
};
