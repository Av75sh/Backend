const express = require('express');
const app = express()

app.set("view engine", 'ejs')

app.use((req, res, next) => {
    console.log("Middleware")

    const a = 10;
    const b = 11;

    console.log(a+b)
    return next()

})

app.get('/home', (req, res) => {
    res.send("Hello World")
})

app.get('/', (req, res) => {
    res.render('1first')
})

app.listen(5000)