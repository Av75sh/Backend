const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.set("view engine", 'ejs');

app.use('/', (req, res, next) => {
    console.log("New learning");
    
    const a = 10;
    const b = 11;
    console.log(a + b);

    next();
}, (req, res) => {
    res.render('2second');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
