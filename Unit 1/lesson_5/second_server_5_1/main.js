"use strict";

const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");

// create server
const app = http.createServer();

// converts request object methods to JSON String
const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
}

// request listener of HTTP server
app.on("request", (req, resp) => {
    let body = [];

    // if request has data, "data" event is triggered
    req.on("data", bodyData => {
        body.push(bodyData);
    });

    // if request is ending, "end" event is triggered
    req.on("end", () => {
        body = Buffer.concat(body).toString(); // Returns a new Buffer which is the result of concatenating all the Buffer instances in the list(body) together.
        console.log(`Request Body Contents : ${body}`);
    });

    // log request informations
    console.log(`Method : ${getJSONString(req.method)}`);
    console.log(`URL : ${getJSONString(req.url)}`);
    console.log(`Headers : ${getJSONString(req.headers)}`);

    resp.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });

    let responseMessage = "<h1>This will show on the web page.</h1>"
    resp.end(responseMessage); // sends and close response
});

app.listen(port);
console.log(`The server has started and is listening on port number : ${port}`);


// curl command
// curl --data "username= Jon & password=secret" http://localhost:3000