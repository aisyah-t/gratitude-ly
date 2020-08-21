
exports.up = function(knex) {
    return knex.schema.createTable('prompts', function (table) {
        table.increments('id').primary()
        table.string('prompt')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('prompts')
};
