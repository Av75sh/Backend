### MongoDB
MongoDB is a NoSQL database that is designed for stroing and managing large amount of unstructures and semi-structured databses
(unlike NoSQL, PostgreSQL that uses tables adn columns to store data)
`MongoDB` store data in a flexible way, JSON like format **BSON (Binary JSON)**

``` js
    npm i moongose
    const moongoose = require('moongose')
```
**Scehma** the basic properties which we are using in our databses

## How MongoDB work 

Make 3 folder
1. Main folder where you work (2NPM) -> 6submit.js
2. models -> (user.js) where you define schema 
3. config -> (db.js) where you connect your database

``` js
    ** 2NPM folder **
    const dbConnection = require('./config/db')
    const userModel = require('./models/user')
```
``` js
    ** user.js **
    const mongoose = require('mongoose')
    const userSchema = new mongoose.Schema({
        username: String,
    })
    const userModel = mongoose.model('user', userSchema)
    module.exports = userModel

```
``` js
    ** db.js **
    const mongoose = require('mongoose')
    const connection = mongoose.connect('mongodb://0.0.0.0/2NPM').then(() =>{
    console.log("Connected to database")
})

    module.exports = connection
```

## .gitignore
We use .gitignore is a file in node js that specifies untrack files. That a git should ignore It is used to prevent certain files or folders from being include in git repo 

1. **Auto generated files**  like `node-modules` as it could be install using npm i. So why waste space

   2 **.env** it hold the information of `API_KEYS` , database credentials. hese should not be tracked to prevent accidental exposure.

[Next Page](chapter4.md)