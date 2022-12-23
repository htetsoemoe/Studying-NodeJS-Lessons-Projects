"use strict";

const httpStatus = require("http-status-codes");
const httpContentType = {
    "Content-Type": "text/html"
};

// create route object
const routes = {
    "GET": {
        "/info": (req, resp) => {
            resp.writeHead(httpStatus.OK, {
                "Content-Type": "text/plain"
            });
            resp.end("Info Page");
        }
    },

    "POST": {}
}

exports.handle = (req, resp) => {
    try {
        // if incoming request method and url are existing in routes object
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, resp);// call 'callback' by request method and url
        } else {
            resp.writeHead(httpStatus.NOT_FOUND, httpContentType);
            resp.end("<h1>File not Found!</h1>");
        }
    } catch (ex) {
        console.log("Error : " + ex);
    }
}

// add route method and url to 'route' object
exports.get = (url, callback) => {
    routes["GET"][url] = callback;
};

exports.post = (url, callback) => {
    routes["POST"][url] = callback;
};