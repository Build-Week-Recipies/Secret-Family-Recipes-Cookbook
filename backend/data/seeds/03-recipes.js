exports.seed = function (knex) {
  return knex("recipes")
    .del()
    .then(function () {
      return knex("recipes").insert([
        {
          recipe_title: "Hard Boiled Egg",
          recipe_source: "Mom",
          recipe_ingredients: "egg,water",
          recipe_instructions: "boil egg in water for 12 minutes, remove and let cool",
          recipe_category: "Snack",
          user_id: 1
        },
        {
          recipe_title: "Scrambled Eggs",
          recipe_source: "Dad",
          recipe_ingredients: "egg,oil,salt,pepper",
          recipe_instructions: "heat frying pan on medium with desired oil, crack 2-3 eggs onto surface, salt, let cook for 3-4 mins, scramble!",
          recipe_category: "Breakfast",
          user_id: 2
        }
      ]);
    });
  };
