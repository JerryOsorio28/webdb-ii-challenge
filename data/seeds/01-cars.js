
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dealer').insert([
        {
          VIN: '987654323456', 
          make: 'Honda', 
          model: 'Civic', 
          mileage: '14324', 
          transmission: 'Automatic', 
          status: 'Clean'
        }
      ]);
    });
};
