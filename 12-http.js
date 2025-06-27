const http = require('http');

const server = http.createServer((req,res) => {
  if(req.url === '/') {
    res.end('welcome to our home page')
  }
  if(req.url === '/about') {
    res.end('Here is our short History')
  }
  res.end(`
    <h1>OOPS!</h1>
    <p>We can seem to find the page you are looking for 
    <a href="/"> back home</a</p>`)
})
server.listen(5000);