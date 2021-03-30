
exports.up = async function(knex) {
  await knex.schema
  .createTable("recipes", (recipes) => {
      recipes.increments("recipe_id")
      recipes.string("recipe_title")
      recipes.string("recipe_source")
      recipes.string("recipe_ingredients")
      recipes.string("recipe_instructions")
      recipes.string("recipe_category")
      recipes
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("user_id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes")
};
