const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const items = [
    { id: 1, name:'iPhone12 Pro Max'},
    { id: 2, name:'Google Pixel 5'}
]

app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

app.get('/items', (req, res) => {
    return res.json(items)
})

module.exports = app
