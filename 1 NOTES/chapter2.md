# EJS
EJS stands for `Embedded JavaScript` and is a templating engine used in Node.js (and other JavaScript environments) to generate HTML dynamically.

```Code node js :- 
const express = require('express');
const app = express()

app.set("view engine", 'ejs')

app.get('/', (req, res) => {
    res.render("Hello Avinash")
})
app.listen(5000)
```