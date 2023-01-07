"use strict";

const httpStatus = require("http-status-codes");

// prints error in terminal
// parameters  list are important for error handle router
exports.logErrors = (error, req, resp, next) => {
    console.error(error);
    next(error);
};

// this error handler catch when "404"
exports.respondNoResourceFound = (req, resp) => {
    let errorCode = httpStatus.NOT_FOUND;
    resp.status(errorCode);
    resp.sendFile(`./public/${errorCode}.html`, {
        root: "./"
    });
};

// this error handler catch all error of application
exports.respondInternalError = (error, req, resp, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`Error occured : ${error.stack}`);
    resp.status(errorCode);
    resp.sendFile(`./public/${errorCode}.html`, {
        root: "./"
    });
};