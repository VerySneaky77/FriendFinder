module.exports.getRouteSurvey = function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"))
    console.log(path.join(__dirname));
}

module.exports.getRouteIndex = function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"))};

module.exports.redirectIndex = function (req, res) {
    res.redirect('/');
};