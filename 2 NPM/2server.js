
const http = require('http')                             
const server = http.createServer((req, res) => {

    if(req.url == "/home" ){
        res.end("Home page")
    }
    if(req.url == "/about" ){
        res.end("About Page")
    }
})

server.listen(5000)