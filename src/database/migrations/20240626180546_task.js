
exports.up = function(knex) {
    return knex.schema.createTable('task', (table) => {
        table.increments('id').primary();
        table.string('title', 255);
        table.text('description');
        table.boolean('completed').defaultTo(false);
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('user').onDelete('CASCADE');
    });
};


exports.down = function(knex) {
    return knex.schema.dropTable('tasks')
};
