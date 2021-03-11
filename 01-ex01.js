const http=require('http');

const hostname='127.0.0.1'; //localhost
const port=3000;    //port

const server=http.createServer(function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
});

server.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});