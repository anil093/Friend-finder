var friendsArray = require("../app/data/friend.js");

module.exports = function(app) {
  app.get("/api/AllFriends", (req, res) => {
    res.json(friendsArray);
  });

  app.post("/api/AllFriends", function(req, res) {
    var friendsScores = req.body.scores;
    var scoresArray = [];
    var bestMatch = 0;

    console.log("hello");
    for (var i = 0; i < friendsArray.length; i++) {
      var scoresDiff = 0;

      for (var k = 0; k < friendsScores.length; k++) {
        scoresDiff += Math.abs(
          parseInt(friendsArray[i].scores[k]) - parseInt(friendsScores[k])
        );
      }

      scoresArray.push(scoresDiff);
    }
    // scoresArray = [ 4, 5, 6, 3, 10, 9];

    //after all friends are compared, find best match
    // for(var i=0; i<scoresArray.length; i++){
    //initial best match is 0. Then go thru each index
    //e.g. scoresArray[0]<=scoresArray[0] = bestMach=4
    //     if(scoresArray[i] <= scoresArray[bestMatch]){
    //       bestMatch = i;
    //     }
    //   }
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }

    // return the best match result
    var bestResult = friendsArray[bestMatch];
    console.log(bestResult);
    res.json(bestResult);

    //pushes the new submission into the friendsArray
    friendsArray.push(req.body);
  });
};
