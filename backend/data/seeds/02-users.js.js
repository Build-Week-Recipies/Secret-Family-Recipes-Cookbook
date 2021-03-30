

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          username: "Francis",
          password: "password",
        },
        {
          username: "Joey",
          password: "password",
        },
        {
          username: "Carlos",
          password: "password",
        },
      ])
    });
  };