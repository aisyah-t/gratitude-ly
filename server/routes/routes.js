import { Router } from 'express'
import { getPrompts, getEntries } from '../db/db'
const router = Router()

//Put backend routes here
router.get('/prompts', (req, res) => {
    getPrompts()
        .then(prompts => {
            res.send(prompts)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

router.get('/entries', (req, res) => {
    getEntries()
        .then(entries => {
            res.send(entries)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

export default router