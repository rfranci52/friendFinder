var path = require("path");

module.exports = function (app) {
    app.get("/results", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/results.html"))
    });
    app.get("/", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"))
    });



};