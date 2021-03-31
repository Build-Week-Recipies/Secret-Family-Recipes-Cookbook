const router = require("express").Router();
const { mw } = require("./recipes-middleware");
const { restricted } = require("../auth/auth-middleware");
const Recipe = require("./recipes-model");

// Endpoints
router.get("/", async (req, res, next) => {
  try {
    const Recipes = await Recipe.getAll();
    res.json(Recipes);
  } catch (err) {
    next(err);
  }
});