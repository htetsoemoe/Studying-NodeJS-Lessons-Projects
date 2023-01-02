exports.rootController = (req, resp) => {
    resp.render("index");
}

exports.nameController = (req, resp) => {
    resp.render("name");
}