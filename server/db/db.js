import { development as config } from '../../knexfile'
const connection = require('knex')(config)

//Write DB functions here
function getPrompts(db = connection) {
    return db('prompts').select()
}

function getEntries(db = connection) {
    return db('entries').select()
}

export default {
    getEntries,
    getPrompts
}