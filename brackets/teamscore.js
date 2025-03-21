var teamScore = {
  "ACORN": 8,
  "DEVICE": 7,
  "CAPECOD": 6,
  "NICO": 5,
  "VENT-AVOID": 4,
  "REMAP-CAP": 3,
  "PACER": 2,
  "PROPHY-VAP": 1
}

/*var testteamScore = {"DEVICE": 7, "PACER": 5, "CAPECOD": 6, "REMAP-CAP": 5, "ACORN": 8, "PROPHY-VAP": 4, "NICO": 6, "VENT-AVOID": 5}*/

var organizedScore = Object.entries(teamScore).sort((a, b) => b[1] - a[1])

document.getElementById("score").innerHTML = Object.entries(organizedScore)[0][1][0]
document.getElementById("score1").innerHTML = Object.entries(organizedScore)[1][1][0]
document.getElementById("score2").innerHTML = Object.entries(organizedScore)[2][1][0]
document.getElementById("score3").innerHTML = Object.entries(organizedScore)[3][1][0]
document.getElementById("score4").innerHTML = Object.entries(organizedScore)[4][1][0]
document.getElementById("score5").innerHTML = Object.entries(organizedScore)[5][1][0]
document.getElementById("score6").innerHTML = Object.entries(organizedScore)[6][1][0]
document.getElementById("score7").innerHTML = Object.entries(organizedScore)[7][1][0]

document.getElementById("winner").innerHTML = Object.entries(organizedScore)[0][1][0]
document.getElementById("final").innerHTML = Object.entries(organizedScore)[0][1][0]
document.getElementById("final1").innerHTML = Object.entries(organizedScore)[2][1][0]
document.getElementById("victor").innerHTML = Object.entries(organizedScore)[0][1][0]
document.getElementById("victor1").innerHTML = Object.entries(organizedScore)[1][1][0]
document.getElementById("victor2").innerHTML = Object.entries(organizedScore)[2][1][0]
document.getElementById("victor3").innerHTML = Object.entries(organizedScore)[3][1][0]

$.each(organizedScore,function(key,value){
  $('#ranking_section').append(value[0] +": "+ value[1] + "<p>")
});
