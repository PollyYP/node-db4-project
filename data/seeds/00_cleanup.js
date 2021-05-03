exports.seed = async function (knex) {
  await knex("recipes").truncate();
  await knex("steps").truncate();
  await knex("ingredients").truncate();
  await knex("proportions").truncate();
};
