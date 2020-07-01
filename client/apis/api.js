import request from 'superagent'

export function getPrompts () {
    return request.get('/api/prompts')
    .then(res => {
        return res.body
    })
}

