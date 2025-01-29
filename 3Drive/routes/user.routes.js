const express = require('express');
const router = express.Router();

//Middleware
router.use(express.json());
router.use(express.urlencoded({extended: true}));


router.get('/register', (req,res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('User registered')
})
module.exports = router;