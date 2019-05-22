var express = require("express");
var path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", function(req, res){
    res.send("Hello World!");
});

app.listen(PORT, () => console.log(`App listening on ${PORT}`));