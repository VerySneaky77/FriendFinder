// Data source
const friends = require("../data/friends");
//
module.exports = function (app) {
    // Friends api get
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Friends api post
    app.post("/api/friends", (req, res) => {
        // User with the closest match to visitor responses
        // Req.body is coming back as undefined
        console.log(req.body);
        // ====================================
        let match = {
            name: "",
            photo: "",
            friendDifference: 0
        }
        // User data from survey
        let userData = req.body;
        let userScores = userData.scores;
        // User-friend difference
        let totalDifference;

        // Friend user list loop
        for (let i = 0; i < friends.length; i++) {
            let currentFriend = friends[i];
            totalDifference = 0;

            // Scores for friends
            for (let k = 0; k < currentFriend.scores.length; k++) {
                let currentFriendScore = currentFriend.scores[k];
                let currentUserScore = userScores[k];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            // Update best match on lower difference score
            if (scoreDifference <= bestMatch.friendDifference) {
                match.name = currentFriend.name;
                match.photo = currentFriend.photo;
                match.friendDifference = totalDifference;
            }
        }

        friends.push(userData);
        res.json(match);
    });
}