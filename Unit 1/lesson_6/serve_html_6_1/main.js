"use strict";

const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs"); // using file module

const getViewUrl = url => {
   return `views${url}.html`; // req.url => /, /index
}

const app = http.createServer((req, resp) => {
    let viewUrl = getViewUrl(req.url);
    //console.log(viewUrl);

    // read file from file-system using fs module
    fs.readFile(viewUrl, (error, data) => {
        if (error) { // if there is no file
            resp.writeHead(404);
            resp.write("<h1>File Not Found!</h1>");
        } else {
            resp.writeHead(200, {
                "Content-Type": "text/html"
            });
            resp.write(data);
        }
        resp.end();
    });
});
app.listen(port);
console.log(`The server has started and is listening on port number ${port}`);