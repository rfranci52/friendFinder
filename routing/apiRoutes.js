var friendData = require("../data/friends");


module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        response.json(friendData);
    });
    app.post("/api/friends", function (request, response) {



        friendData.push(request.body);
        response.json(true);
        // friend1score0 = friendData[0].scores[0];
        // friend1score1 = friendData[0].scores[1];
        // friend1score2 = friendData[0].scores[2];
        // friend1score3 = friendData[0].scores[3];

        // friend2score0 = friendData[1].scores[0];
        // friend2score1 = friendData[1].scores[1];
        // friend2score2 = friendData[1].scores[2];
        // friend2score3 = friendData[1].scores[3];

        // friend3score0 = friendData[2].scores[0];
        // friend3score1 = friendData[2].scores[1];
        // friend3score2 = friendData[2].scores[2];
        // friend3score3 = friendData[2].scores[3];

        // friend4score0 = friendData[3].scores[0];
        // friend4score1 = friendData[3].scores[1];
        // friend4score2 = friendData[3].scores[2];
        // friend4score3 = friendData[3].scores[3];

        // friend5score0 = friendData[4].scores[0];
        // friend5score1 = friendData[4].scores[1];
        // friend5score2 = friendData[4].scores[2];
        // friend5score3 = friendData[4].scores[3];





        // friendscore1total = friend1score0 + friend1score1 + friend1score2 + friend1score3;
        // friendscore2total = friend2score0 + friend2score1 + friend2score2 + friend2score3;
        // friendscore3total = friend3score0 + friend3score1 + friend3score2 + friend3score3;
        // friendscore4total = friend4score0 + friend4score1 + friend4score2 + friend4score3;
        // friendscore5total = friend5score0 + friend5score1 + friend5score2 + friend5score3;


        // if (friendscore5total >= friendscore1total) {
        //     console.log(friendData[0])
        // } else if (friendscore5total >= friendscore2total) {
        //     console.log(friendData[1])
        // } else if (friendscore5total >= friendscore3total) {
        //     console.log(friendData[2])
        // } else if (friendscore5total >= friendscore4total) {
        //     console.log(friendData[3])
        // }




    })


}