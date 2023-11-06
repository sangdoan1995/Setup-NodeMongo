import http from "http"
import app from './src/app';
require('dotenv').config()

let server = http.createServer(app)

let port = process.env.PORT || 3000


server.listen(port, () => {
    console.log(`server running port: ${port}`)
})