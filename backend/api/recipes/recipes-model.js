const db = require("../../data/dbConfig");


module.exports = { getAll };

async function getAll() {
 return db("recipes")
}

// // Helper Methods
// function getRecipesByCategory() {
//     return db("recipes as")
//       .leftJoin("truck_ratings as r", "t.truck_id", "r.truck_id")
//       .column(
//         "t.truck_id",
//         "t.truck_name",
//         "t.truck_description",
//         "t.image_url",
//         "t.truck_lat",
//         "t.truck_long",
//         "t.open_time",
//         "t.close_time",
//         "t.cuisine"
//       )
//       .count({ number_of_ratings: "r.truck_rating_id" })
//       .avg({ truck_avg_rating: "r.truck_rating" })
//       .groupBy("t.truck_id")
//       .limit(20);
//   }