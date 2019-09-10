
exports.up = function(knex) {
    //creates a table 
    return knex.schema.createTable('dealer', tbl => {
    
        tbl.increments() //auto increment primary key

        //we are able to create 
        tbl.string('VIN').unique().notNullable();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.string('mileage').notNullable();

        tbl.string('transmission').notNullable();
        tbl.string('status').notNullable();
    })
};

exports.down = function(knex) {
    
    //undo table changes
    return knex.schema.dropTableIfExists('dealer');
};
