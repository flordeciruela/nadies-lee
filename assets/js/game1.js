var play1 = document.getElementById("play-1");

var completar1 = document.getElementById("input-1");
var completar2 = document.getElementById("input-2");
var completar3 = document.getElementById("input-3");
var completar4 = document.getElementById("input-4");

play1.addEventListener("click", function(event) {
	if(completar1.value == "50 y un 80%" && completar2.value == "90% del espacio" && completar3.value == "habitable" && completar4.value == "Menos de 10%") {
		alert("Has ganado 4 puntos!!");
		document.getElementById('completar').reset();
		window.location = "game2.html";
		//puntuacion +=4;
	} else {
		if(completar1.value.trim().length == 0 || completar2.value.trim().length == 0 || completar3.value.trim().length == 0 || completar4.value.trim().length == 0) {
			alert("Debes completar todos los campos");
		} else {
			document.getElementById('completar').reset();
			window.location = "game2.html";
		}
	}

});
