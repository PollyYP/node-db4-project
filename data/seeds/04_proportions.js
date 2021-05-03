exports.seed = async function (knex) {
  await knex("proportions").insert([
    { ingredient_id: 1, step_id: 1, quantity_oz: 8 },
    { ingredient_id: 2, step_id: 2, quantity_oz: 2 },
    { ingredient_id: 3, step_id: 2, quantity_oz: 2 },
    { ingredient_id: 4, step_id: 2, quantity_oz: 0.833333 },
    { ingredient_id: 5, step_id: 2, quantity_oz: 16 },
    { ingredient_id: 6, step_id: 2, quantity_oz: 16 },
    { ingredient_id: 7, step_id: 4, quantity_oz: 16 },
    { ingredient_id: 2, step_id: 5, quantity_oz: 1 },
    { ingredient_id: 5, step_id: 5, quantity_oz: 8 },
    { ingredient_id: 4, step_id: 5, quantity_oz: 0.0833333 },
    { ingredient_id: 8, step_id: 5, quantity_oz: 0.0833333 },
  ]);
};
