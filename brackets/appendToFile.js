const fs = require('fs'); 

function processText (){
	fs.appendFile('textfile.txt', document.getElementById("name").innerHTML + '\n', function (err) { 
		if (err) throw err; 
	});
	
	alert("Your vote has been submitted successfully.");
}
