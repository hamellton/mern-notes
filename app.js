import express from 'express'
import bodyParser from 'body-parser'
import * as db from './utils/dataBaseUtils.js'
import * as path from "path"

const __dirname = path.dirname(new URL(import.meta.url).pathname);


db.setUpConnection()

const app = express()

app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, 'client')))
app.use('/', (req, res) => {
    res.send(path.resolve(__dirname, 'client', 'index.html'))
})

app.get('/users', (req, res) => {
    console.log('get request')
    db.listUsers().then(data => console.log(data))
})

app.post('/users', (req, res) => {
    console.log('post request')
    db.createUser(req.body).then(data => res.send(data))
})

app.delete('/users/:id', (req,res) => {
    db.deleteUser(req.body).then(data => res.send(data))
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server has been started on: ${PORT}`))