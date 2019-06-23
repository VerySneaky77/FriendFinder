// Data source
const friends = require("../data/friends");
//
module.exports = function (app) {
    // Friends api getter
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    // Friends api poster
    app.post("/api/friends", function (req, res) {
        // User with the closest match to visitor responses
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference
        }

        // User data from survey
        let userData = req.body;
        let userScores = userData.scores;
        // User-friend difference
        let scoreDifference;

        // Friend user list loop
        for (let i = 0; i < friends.length; i++) {
            let currentFriend = friends[i];
            scoreDifference = 0;

            // Scores for friends
            for (let k = 0; k < currentFriend.scores.length; k++) {
                let currentFriendScore = currentFriend.scores[k];
                let currentUserScore = userScores[k];

                scoreDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            // Update best match on lower difference score
            if (scoreDifference <= bestMatch.friendDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }

        friends.push(userData);
        res.json(bestMatch);
    });
}