const express = require("express");
var path = require("path");
// Routes
const apiRoutes = require("./app/routing/apiRoutes")
const htmlRoutes = require("./app/routing/htmlRoutes")
const apiKeyGet = apiRoutes.apiKeyGet;
const apiKeyPost = apiRoutes.apiKeyPost;
const htmlIndexGetter = htmlRoutes.getIndex;
const htmlSurveyGet = htmlRoutes.getRouteSurvey;

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`App listening on ${PORT}`));

/////////////////////////////////////////////////
//      FRIENDS API             /////////////////
/////////////////////////////////////////////////
app.get(apiKeyGet, function(req, res) {
    return res.json(friends);
  });
app.post(apiKeyPost, function(req, res) {
    // TODO : Handle survey results
  });

app.get(htmlSurveyGet, function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
    console.log(path.join(__dirname));

});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
    
});
app.get("/*", htmlRoutes.redirectIndex);