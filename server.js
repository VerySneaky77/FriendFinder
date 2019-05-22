const express = require("express");
var path = require("path");
// Friends data array
const friends = require("./app/data/friends.js");
// Routes
const apiRoutes = require("./app/routing/apiRoutes.js")
const htmlRoutes = require("./app/routing/htmlRoutes.js")


const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", function(req, res){
    res.send("Hello World!");
});

app.listen(PORT, () => console.log(`App listening on ${PORT}`));