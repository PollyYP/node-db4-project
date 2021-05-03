exports.seed = async function (knex) {
  await knex("steps").insert([
    {
      recipe_id: 1,
      step_number: 1,
      step_instructions:
        "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes. Drain.",
    },
    {
      recipe_id: 1,
      step_number: 2,
      step_instructions:
        "Melt butter in a saucepan over medium heat; stir in flour, and salt until smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes.",
    },
    {
      recipe_id: 1,
      step_number: 3,
      step_instructions: "Fold macaroni into cheese sauce until coated.",
    },
    {
      recipe_id: 2,
      step_number: 1,
      step_instructions:
        "Bring a pot of salted water to a boil. Add potatoes and cook until tender but still firm, about 15 minutes; drain.",
    },
    {
      recipe_id: 2,
      step_number: 2,
      step_instructions:
        "In a small saucepan heat butter and milk over low heat until butter is melted. Using a potato masher or electric beater, slowly blend milk mixture into potatoes until smooth and creamy. Season with salt and pepper.",
    },
  ]);
};
