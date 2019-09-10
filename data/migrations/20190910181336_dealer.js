
exports.up = function(knex) {
    //creates a table 
    return knex.schema.createTable('dealer', tbl => {
    
        tbl.increments() //auto increment primary key
        tbl.string('cars', 128) //we are able to create 
            .unique()
            .notNullable();
    })
};

exports.down = function(knex) {
    //undo table changes
    return knex.schema.dropTableIfExists('dealer');
};
