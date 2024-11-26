/*let teamScore = {
  "Team 1": 8,
  "Team 2": 7,
  "Team 3": 6,
  "Team 4": 5,
  "Team 5": 4,
  "Team 6": 3,
  "Team 7": 2,
  "Team 8": 1
}*/

let testteamScore = {"Team 1": 5, "Team 2": 1, "Team 3": 8, "Team 4": 2, "Team 5": 5, "Team 6": 4, "Team 7": 3, "Team 8": 6}

$.each(testteamScore,function(key,value){
  $('#ranking-section').append(key +": "+value+"<p>")
});
