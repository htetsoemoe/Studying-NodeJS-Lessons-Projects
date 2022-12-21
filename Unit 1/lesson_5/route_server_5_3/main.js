"use strict";

const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Page</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": "<h1>Say Hello by emailing us here.</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>",
}

const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const app = http.createServer((req, resp) => {
    resp.writeHead(200, {
        "Content-Type": "text/html"
    });
    if (routeResponseMap[req.url]) {
        resp.end(routeResponseMap[req.url]);
    } else {
        resp.end("<h1>Welcome to our home page!</h1>");
    }
});

app.listen(port);
console.log(`The server has started and is listening on port number : ${port}`);
