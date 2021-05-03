const express = require("express");
const db = require("./recipes_model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const recipes = await db.find();
    res.status(200).json(recipes);
  } catch (err) {
    next(err);
  }
});

router.get("/:recipe_id", async (req, res, next) => {
  const { recipe_id } = req.params;
  console.log(req.params);

  try {
    const recipe = db.getRecipeById(recipe_id);
    res.status(200).json(recipe);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
