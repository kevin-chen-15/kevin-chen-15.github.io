/*var teamScore = {
  "Team 1": 8,
  "Team 2": 7,
  "Team 3": 6,
  "Team 4": 5,
  "Team 5": 4,
  "Team 6": 3,
  "Team 7": 2,
  "Team 8": 1
}*/

var testteamScore = {"Team 1": 5, "Team 2": 1, "Team 3": 8, "Team 4": 2, "Team 5": 5, "Team 6": 4, "Team 7": 3, "Team 8": 6}

var organizedScore = Object.entries(testteamScore).sort((a, b) => b[1] - a[1])

document.getElementById("score").innerHTML = Object.entries(organizedScore)[0][1][0]
document.getElementById("score1").innerHTML = Object.entries(organizedScore)[1][1][0]
document.getElementById("score2").innerHTML = Object.entries(organizedScore)[2][1][0]
document.getElementById("score3").innerHTML = Object.entries(organizedScore)[3][1][0]
document.getElementById("score4").innerHTML = Object.entries(organizedScore)[4][1][0]
document.getElementById("score5").innerHTML = Object.entries(organizedScore)[5][1][0]
document.getElementById("score6").innerHTML = Object.entries(organizedScore)[6][1][0]
document.getElementById("score7").innerHTML = Object.entries(organizedScore)[7][1][0]

$.each(organizedScore,function(key,value){
  $('#ranking_section').append(value[0] +": "+ value[1] + "<p>")
});
