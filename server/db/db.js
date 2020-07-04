const config = require('../../knexfile').development
const connection = require('knex')(config)

//Write DB functions here

function getEntries (db = connection) {
    return db('entries').select()
}

function getPrompts (db = connection) {
    return db('prompts').select()
}

module.exports = {
    getEntries,
    getPrompts
}