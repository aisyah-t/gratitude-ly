import { join } from 'path'
import express, { json, static } from 'express'
import routes from './routes/routes'
const server = express()

server.use(json())
server.use(static(join(__dirname, './public')))
server.use('/api', routes)

export default server
