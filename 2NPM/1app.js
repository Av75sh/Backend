const express = require('express');
const morgan = require('morgan');
const app = express();
const dbConnection = require('./config/db');
const userModel = require('./models/user'); 

app.use(morgan('dev'));


// Built in middleware for req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))                  // for css files


app.set("view engine", 'ejs');
app.get('/', (req,res) => {
    res.render('3form')
})


app.post('/post-form-data', (req, res) => {
    console.log(req.body);
    res.send('Data recieved');
})
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});


