import express from 'express'

const app = express()

app.get('/', (req, res) => {
    console.log('GET request')
    res.send('Server has been started!!!')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server has been started on: ${PORT}`))