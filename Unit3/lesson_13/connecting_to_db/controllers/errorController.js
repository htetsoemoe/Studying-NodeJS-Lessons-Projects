"use strict";

const httpStutus = require("http-status-codes");

exports.logErrors = (error, req, resp, next) => {
    console.error(error.stack);
    next(error);
};

exports.resourceNotFound = (req, resp) => {
    let errorCode = httpStutus.NOT_FOUND;
    resp.status(errorCode);
    resp.send(`${errorCode} | The page does not exist!`);
};

exports.internalServerError = (req, resp) => {
    let errorCode = httpStutus.INTERNAL_SERVER_ERROR;
    resp.status(errorCode);
    resp.send(`${errorCode} | Sorry, our application has a problem.`);
};