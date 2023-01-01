"use stricts";

exports.sendReqParam = (req, resp) => {
    let veg = req.params.vegetable;
    resp.send(`This is a page for ${veg}`);
}