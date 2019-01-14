exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('content').del()
      .then(function () {
        // Inserts seed entries
        return knex('content').insert([
          {id: 1, entry: '123'},
          {id: 2, entry: '456'},
          {id: 3, entry: '789'},
          {id: 4, entry: '101'},
          {id: 5, entry: '213'},
          {id: 6, entry: '141'},
          {id: 7, entry: '516'},
          {id: 8, entry: '171'},
          {id: 9, entry: '819'},
          {id: 10, entry: '202'},
          {id: 11, entry: '122'},
          {id: 12, entry: '232'},
          {id: 13, entry: '425'},
          {id: 14, entry: '262'},
          {id: 15, entry: '728'},
          {id: 16, entry: '229'},
          {id: 17, entry: '303'},
          {id: 18, entry: '313'},
          {id: 19, entry: '233'},
          {id: 20, entry: '343'}
        ]);
      });
  };