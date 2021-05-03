const db = require("../config");

function find() {
  return db("recipes");
}

function getRecipeById(recipe_id) {
  const data = db("recipes").where("recipe_id", recipe_id);
  console.log(data);

  //.innerJoin("steps as s", "r.recipe_id", "s.recipe_id")
  //.innerJoin("proportions as p", "s.step_id", "p.step_id")
  //.innerJoin("ingredients as i", "p.ingredient_id", "i.ingredient_id")

  //.first()

  // const output = {
  //   recipe_id: data.r.recipe_id,
  //   recipe_name: data.recipe_name,
  //   created_at: data.created_at,
  //   steps: [
  //     {
  //       step_id: data.s.step_id,
  //       step_number: data.step_number,
  //       step_instructions: data.step_instructions,
  //       ingredients: [
  //         data.i.ingredient_id,
  //         data.ingredient_name,
  //         data.quantity,
  //       ],
  //     },
  //   ],
  // };

  //return output;
}

module.exports = { find, getRecipeById };
