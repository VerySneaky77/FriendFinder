module.exports.getRouteSurvey = res.sendFile(path.join(__dirname, "app/public/home.html"));

module.exports.getRouteIndex = "/";

module.exports.redirectIndex = function (req, res) {
    res.redirect('/');
};