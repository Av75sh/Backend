## Tailwind css
1. import cdn from tailwindcss webiste
2. use **Flowbite.com**

## tailwind tips 
``` css
classname="bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
classname= "w-screen h-screen"
```

## Express-validator
When we are dealing with email and pass data should be valid for that use 
```js
const { body, validationResult } = require('express-validator');

body('email').trim().isEmail().isLength({ min:10 }),

const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.send(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            })
        }
        res.send(errors);
```

## Important (env)
Now your database is very private file for that use **env** files put env files to **.gitignore** we never upload env  to github
```js
npm i dotenv
dotenv.config();

/* in env file */
MONGO_URI=mongodb://0.0.0.0/3Drive
```

In MongDB file 
```js
const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('COnnected to DB');
    })
}
```