const http = require('http')
const server = http.createServer((req,res) => {
    console.log('New connection')
    res.end('Hello Eranga Lakmal Perera')
})

const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
