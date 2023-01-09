"use strict";

const courses = [
    {
        title: "Event Dirven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Bread",
        cost: 60
    },
    {
        title: "Object Oriented Pizza",
        cost: 100
    }
];

exports.showCourses = (req, resp) => {
    resp.render("courses", {
        offeredCourses: courses
    });
};

exports.showSignUp = (req, resp) => {
    resp.render("contact");
};

exports.postedSignUpForm = (req, resp) => {
    resp.render("thanks");
}