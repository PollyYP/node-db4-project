exports.seed = async function (knex) {
  await knex("recipes").insert([
    {
      recipe_name: "Simple Macaroni and Cheese",
      created_at: "2021-01-01 08:23:19.120",
    },
    {
      recipe_name: "Basic Mashed Potatoes",
      created_at: "2021-01-02 10:23:15.100",
    },
  ]);
};
