exports.up = function(knex, Promise) {
    return knex.schema.createTable('content', function (table) {
      table.increments('id').primary()
      table.string('entry')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('dtwords')
  };