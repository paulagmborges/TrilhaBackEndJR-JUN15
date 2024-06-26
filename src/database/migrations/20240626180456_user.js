
exports.up = function(knex) {
    return knex.schema.createTable('user',(table) =>{
        table.increments('id').primary()
        table.string('name',150)
        table.string('email',255).unique()
        table.string('password')
     })
};


exports.down = function(knex) {
    return knex.schema.dropTable('user')
};
