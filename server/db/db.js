const config = require('../../knexfile').development
const connection = require('knex')(config)

//Write DB functions here
function getPrompts (db = connection) {
    return db('prompts').select()
}

function getEntries (db = connection) {
    return db('entries').select()
}

module.exports = {
    getEntries,
    getPrompts
}