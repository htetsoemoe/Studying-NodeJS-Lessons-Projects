"use strict";

exports.rootController = (req, resp) => {
    resp.render("index", {greet: " Welcome! This is a home page." });
};

exports.nameController = (req, resp) => {
    let paramName = req.params.name;
    resp.render("name", {name: paramName});
};

exports.submitController = (req, resp) => {
    console.log(req.body);
    console.log(req.query);
    resp.send("POST Successful!");
};