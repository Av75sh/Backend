const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express validator');

router.get('/register', (req,res) => {
    res.render('register')
})

router.post('/register',
    body('email').trim().isEmail().isLength({ min:5 }),
    body('useranme').trim().isLength({ min:5 }),
    body('password').trim().isLength({ min: 5}),
    
    (req, res) => {
        const errors = validationResult(req);
        console.log(errors);
        res.send(errors);
})
module.exports = router;

