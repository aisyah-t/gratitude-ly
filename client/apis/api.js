import request from 'superagent'

export function getPrompts () {
    return request
    .get('/api/prompts')
    .then(res => {
        return res.body
    })
}

export function addEntry (entry) {
    return request
    .post('/api/prompts/:id')
    .send(entry)
    .then(req => {
        return req.body
    })
}

