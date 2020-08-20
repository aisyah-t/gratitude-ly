
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      // Inserts seed entries
      return knex('entries').insert([
        { id: 1, entry: "I am grateful for having: a fully-stocked fridge and pantry; a warm and dry home; and a good support network." },
        { id: 2, entry: "The other day a stranger offered me a lift home when I couldn't get on the bus because it was full. It was cold and rainy and I really appreciate their kindness." },
        { id: 3, entry: "This week I'm grateful for having learned that working on my own instead of in a pair has helped me identify areas of study I need to work on." }
      ]);
    });
};
