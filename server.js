var express = require("express");
var PORT = process.env.PORT ||8080;
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// routes give the server a map of how to respond to user actions
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function () {
    console.log("server listening on: http://localhost:" + PORT);
})
