
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dealer').insert([
        {
          VIN: '765456789876', 
          make: 'Honda', 
          model: 'Civic', 
          mileage: '14324', 
          transmission: 'Automatic', 
          status: 'Clean'
        },
        {
          VIN: '6543234567876', 
          make: 'Toyota', 
          model: 'Corolla', 
          mileage: '76543', 
          transmission: 'Standard', 
          status: 'Clean'
        },
        {
          VIN: '543456765432', 
          make: 'Scion', 
          model: 'TC', 
          mileage: '23456', 
          transmission: 'Standard', 
          status: 'Clean'
        },
      ]);
    });
};
