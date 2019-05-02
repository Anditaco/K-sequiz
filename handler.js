var questions =
		[["Wie viel gibst du für Käse?",
			[["Nicht viel", 2],
			["Ich nehme den Käse meiner Mutter", 4],
			["Ein normaler Preis", 0],
			["Viel", 5],
			["Man bezahlt mich für den Käse nehmen", 3],
			["Ich kaufe die Discountmarke", 1]]],
		["Wie isst du Käse?",
			[["Sandwich",1],
			["Croque monsieur", 2],
			["Pasta", 4],
			["Coupelles", 3],
			["Cracker", 5],
			["Käsechips", 0]]],
		["Wie trainierst du?",
			[["Ich spiele mit mienem Hund",0],
			["Cheetos essen ist mein Training", 1],
			["Ja", 2],
			["Nein", 3],
			["Ich laufe Marathons", 4],
			["Swoll.", 5]]],
		["Wie hart gefällt dir dein Käse?",
			[["Quasi-hart",3],
			["Sechserpackung hart", 0],
			["So hart wie ein Mönchskopf", 5],
			["Harten als dieses Quiz zu machen", 4],
			["Mittel", 1],
			["Keine Präferenz", 4]]],
		["Was ist dein Leiblingsschwiezerberg?",
			[["Matterhorn",1],
			["Nisen", 3],
			["Pilatus", 5],
			["Schilthorn", 2],
			["Defourspitze", 0],
			["Jungfrau", 4]]],
		["Bist du religiös?",
			[["Sehr religiös",1],
			["Ein bisschen", 5],
			["Manchmal", 4],
			["Super nein", 3],
			["Nur für die Ferien", 2],
			["Nein", 0]]],
		["Was machst du gern?",
			[["Sport",3],
			["Videospielen", 2],
			["Hausaufgaben", 1],
			["Ziechnen", 4],
			["Tanzen", 5],
			["Ich mache nichts gern", 0]]],
		["Was ist dein Lieblingsfarbe?",
			[["Rot",4],
			["Orange", 3],
			["Gelb", 2],
			["Grün", 0],
			["Blau", 5],
			["Lila", 1]]],
		["Was ist deine Lieblingssprache in der Schwiez?",
			[["Französisch",0],
			["Deutsch", 4],
			["Italienisch", 1],
			["Engisch", 2],
			["Gebärdensprache", 5],
			["Rumänisch", 3]]],
		["Was ist dein leiblingsschwiezerkäse?",
			[["Appenzeller",0],
			["Emmentaler", 1],
			["Gruyère", 2],
			["Raclette", 3],
			["Sbrinz", 4],
			["Tête de Moine", 5]]]
		];

function generateQuiz(){
	for(var i = 0; i < questions.length; i++){
		var name = "q" + i;
		var div = document.createElement(name);

		var contents = "<br>";
		contents += "<h3>" + ((i+1) + ") ") + questions[i][0] + "</h3>";
		for(var a = 0; a < questions[i][1].length; a++){
			console.log("<input type=\"radio\" id=\"" + (name + a) + "\" name=\"" + (name) + "\" value=\"" + questions[i][1][a][0] + "\">&nbsp;" + questions[i][1][a][0] + "<br>");
			contents += "<input type=\"radio\" id=\"" + (name + a) + "\" name=\"" + (name) + "\" value=\"" + questions[i][1][a][0] + "\">&nbsp;" + questions[i][1][a][0] + "<br>";
		}
		contents += "<br>";
		div.innerHTML = contents;

		document.getElementById("questions").appendChild(div);
	}

	document.getElementById("go").style.visibility = "hidden";
	document.getElementById("done").style.visibility = "visible";
}

function scoreQuiz(){
	console.log("scoring quiz");
	document.getElementById("done").style.visibility = "hidden";
	document.getElementById("results").style.visibility = "visible";

	console.log("questions length = " + questions.length);
	var scores = [["Appenzeller",0],["Emmentaler",0],["Gruyère",0],["Raclette",0],["Sbrinz",0],["Tête de Moine",0]];
	for(var i = 0; i < questions.length; i++){
		console.log("looking at q" + i);
		var radiosID = "q" + i;
		for(var r = 0; r < questions[i][1].length; r++){
			console.log(document.getElementById(radiosID + r))
			if(document.getElementById(radiosID + r).checked){
				console.log("incrementing index " + questions[i][1][r][1]);
				scores[questions[i][1][r][1]][1]++;
			}
		}
	}
	console.log(scores);
	var maxIndex = 0;
	for(var i = 1; i < scores.length; i++){
		if(scores[i][1] > scores[maxIndex][1]) maxIndex = i;
	}
	document.getElementById("ans").innerHTML = scores[maxIndex][0];
}
