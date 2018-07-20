var friendlist = require('../data/friend.js');

module.exports = function(app){
    app.get('/match',function(req,res){
      res.json(friendlist);
    });

    app.post('/match', function(req,res){
        var newFriend = req.body;
        var newFriendArray = newFriend.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        for(var i=0;i<friendlist.length;i++){
            var scoresDiff = 0;
            for(var j=0;j<newFriendArray.length;j++){
                scoresDiff += (Math.abs(parseInt(friendlist[i].scores[j] - parseInt(newFriendArray[j]))));
            }
            scoresArray.push(scoresDiff);
        }

        for(var i=0;i<scoresArray.length;i++){
            if(scoresArray[i]<=scoresArray[i+1]){
                bestMatch = i;
            }
        }

        var bff = friendlist[bestMatch];
        res.json(bff);

        friendlist.push(newFriend);
    })
}