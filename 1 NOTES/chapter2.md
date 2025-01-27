# EJS
EJS stands for **Embedded JavaScript** and is a templating engine used in Node.js (and other JavaScript environments) to generate HTML dynamically.

``` js
const express = require('express');
const app = express()

app.set("view engine", 'ejs')

app.get('/', (req, res) => {
    res.render("Hello Avinash")
})

app.listen(5000)
```

## Logger
Logger is a tool/utility which record information about the application's execution. It helps us in track events, debug issues.

``` js
    const morgan = require('morgan');
    app.use(morgan('dev'))

    Format :- HTTP method, status code, response time
    GET / 304 1ms - 13
```

## Middleware
Middleware is a function that get executed during the lifecycle of a request. It sit between the incoming request and final request handler.
Often used for:-
1. Request logging
2. Authentication
3. Data Validation
4. Error Handling
5. Modifying request or response data

_
---

# GET Vs POST
GET :- Transfer data from server to frontend

POST :- Transfer data from frontend to server

### Important
app.post do not directly show data on req.body. For that use **Built-in Middleware**.
static helps us to serve css, images, js files

``` js
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static)
```

[Next Page](chapter3.md)
