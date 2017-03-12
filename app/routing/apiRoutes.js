// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    //if (tableData.length < 5) {
     // friends.push(req.body);

      var newFriend = req.body;
      var differenceArray = [];

      for(var i = 0; i <newFriend.scores.length; i++){
        newFriend.scores[i] = parseInt(newFriend.scores[i]);        
      }

      //console.log(newFriend.scores)

      for (var j=0; j<friends.length; j++){

        var totalDifference = 0;
        var compare = friends[j];
        //console.log(compare);

          for (var k=0; k<compare.scores.length; k++){

              var difference = Math.abs(compare.scores[k] - newFriend.scores[k]);
             // console.log(difference)
              totalDifference += difference; 
          }
        
        differenceArray[j] = totalDifference;

      }

      var bestFriendNumbDiff = differenceArray[0];
      var bestFriendIndex =0;
      console.log(differenceArray);

      for (var l=0; l < (differenceArray.length); l++){

        if (differenceArray[l] < bestFriendNumbDiff){
          bestFriendNumbDiff = differenceArray[l];
          bestFriendIndex = l; 
          console.log(bestFriendNumbDiff);
        }
      }

     //console.log (friends[bestFriendIndex]); 
     friends.push(req.body); 
     res.json(friends[bestFriendIndex]);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];
    //waitListData = [];

    console.log(friends);
  });
};