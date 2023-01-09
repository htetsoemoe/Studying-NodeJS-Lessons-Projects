"use strict";

const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, resp) => {
    let errorCode = httpStatus.NOT_FOUND;
    resp.status(errorCode);
    resp.render("error");
};

exports.internalServerError = (req, resp) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    resp.status(errorCode);
    resp.send(`${errorCode} | Sorry, our application has error!`);
}