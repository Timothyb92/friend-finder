var friendsArr = require("../data/friends.js");

function findCompatible(postArray){
    var postIntArr = []
    for (var k = 0; k < postArray.length; k++){
        postIntArr.push(parseInt(postArray[k]));
    }
    var matches = [];
    var num;
    var temp;
    var thisDistance;
    for(var i = 0; i < friendsArr.length - 1; i++){
        thisDistance = 0;
        // console.log("Warrior: " + friendsArr[i].name + "\nScores: " + friendsArr[i].scores);
        for(var j = 0; j < 10; j++){
            temp = parseInt(postIntArr[j]) - friendsArr[i].scores[j];
            if (temp < 0){
                temp *= -1;
            }
            thisDistance += temp;
        }
        console.log(thisDistance);
        if (i === 0){
            num = thisDistance;
        }

        if (thisDistance === num){
            matches.push(friendsArr[i])
        } else if (thisDistance < num){
            matches = [friendsArr[i]]
        }
    }
    var worldWarrMatch = [matches[0].name, matches[0].photo];
    console.log(worldWarrMatch);
    return worldWarrMatch;
}


module.exports = function(app){
    app.get("/api/friends", function(req, res){
        return res.json(friendsArr);
    })

    app.post("/api/friends", function(req, res){
        friendsArr.push(req.body);
        return res.json(findCompatible(req.body.scores))
    })
};