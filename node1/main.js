const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 5000;

const app = http.createServer((req, res) => {
    let _url = req.url;
    const queryData = url.parse(_url, true).query;
    console.log(queryData.id);

    if (_url === "/") {
        _url = "/index.html";
    }
    if (_url === "/favicon.ico") {
        return res.writeHead(404);
    }

    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + _url));
});

app.listen(port);