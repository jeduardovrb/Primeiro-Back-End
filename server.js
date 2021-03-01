const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'Text/plain'});
    res.end("Hello World.")
}).listen(port, hostname, () => {
    console.log(`O servidor está sendo executado em http://${hostname}:3000/`);
});