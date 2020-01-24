exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("");
    tbl
      .text("username", 128)
      .unique()
      .notNullable();
    tbl
      .text("password", 128)
      .unique()
      .notNullable();
    tbl
      .text("department", 128)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
