const express = require('express');
const app = express()

app.set("view engine", 'ejs')

app.get('/home', (req, res) => {
    res.send("Hello World")
})

app.get('/', (req, res) => {
    res.render('1first')
})

app.listen(5000)