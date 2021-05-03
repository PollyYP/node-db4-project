exports.seed = async function (knex) {
  await knex("ingredients").insert([
    { ingredient_name: "elbow macaroni" },
    { ingredient_name: "butter" },
    { ingredient_name: "all_purpose flour" },
    { ingredient_name: "salt" },
    { ingredient_name: "milk" },
    { ingredient_name: "shredded Cheddar cheese" },
    { ingredient_name: "potato" },
    { ingredient_name: "pepper" },
  ]);
};
