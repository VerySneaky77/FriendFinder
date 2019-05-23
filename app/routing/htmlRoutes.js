module.exports.getRouteSurvey = "/survey";

module.exports.getRouteIndex = "/";

module.exports.redirectIndex = function (req, res) {
    res.redirect('/');
};