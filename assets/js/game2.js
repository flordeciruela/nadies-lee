var games = document.getElementById("games");
var play2 = document.getElementById("play-2");

var completar1 = document.getElementById("input-1");
var completar2 = document.getElementById("input-2");
var completar3 = document.getElementById("input-3");
var completar4 = document.getElementById("input-4");

play2.addEventListener("click", function(event) {
	if(completar1.value == "uno" && completar2.value == "dos" && completar3.value == "tres" && completar4.value == "cuatro") {
		alert("Has ganado 4 puntos!!");
	} else {
		alert("Incorrecto, vuelve a intentarlo");
	}
});
