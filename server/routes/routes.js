const express = require('express')

const db = require('../db/db')

const router = express.Router()

//Put backend routes here
router.get('/entries', (req, res) => {
    db.getEntries()
        .then(entries => {
            res.send(entries)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

router.get('/prompts', (req, res) => {
    db.getPrompts()
        .then(prompts => {
            res.send(prompts)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

module.exports = router