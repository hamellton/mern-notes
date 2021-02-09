import express from 'express'
import bodyParser from 'body-parser'
import * as db from './utils/dataBaseUtils.js'

db.setUpConnection()

const app = express()

app.use(bodyParser.json())

app.get('/notes', (req, res) => {
    console.log('get request')
    db.listNotes().then(data => res.send(data))
})

app.post('/notes', (req, res) => {
    console.log('post request')
    db.createNote(req.body).then(data => res.send(data))
})

app.delete('/notes/:id', (req,res) => {
    db.deleteNote(req.body).then(data => res.send(data))
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server has been started on: ${PORT}`))