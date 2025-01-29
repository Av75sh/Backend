const express = require('express');
const morgan = require('morgan');
const useRouter = require('./routes/user.routes')
const app = express();
app.use(morgan('dev'));




app.set("view engine", 'ejs');
app.use('/user', useRouter)


app.listen(5000, () => {
    console.log("Server is running at port 5000");
})