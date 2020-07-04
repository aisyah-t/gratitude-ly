
exports.up = function(knex) {
    return knex.schema.createTable('entries', function (table) {
        table.increments('id').primary()
        table.string('entry')
        table.integer('prompt_id')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('entries')
};
