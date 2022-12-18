"use stricts";

const port = 3000;
const http = require("http"); // import http module
const httpStatus = require("http-status-codes"); // import http-status-codes moudle

// create server instance using http module
const app = http.createServer((request, response) => {
    console.log(`Received an incoming reuquest`);

    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });

    let responseMessage = "<h1>Hello NodeJS World!</h1>";
    response.write(responseMessage);
    response.end();

    console.log(`Sent a response : ${responseMessage}`);
});

app.listen(port);
console.log(`The server has started and is listening on port number : ${port}`);