var games = document.getElementById("games");
var play3 = document.getElementById("play-3");

var eliminarParrafo = document.getElementById("eliminar-parrafo");

play3.addEventListener("click", function(event) {
	if(eliminarParrafo.value == "3") {
		alert("Has ganado 4 puntos!!");
	} else {
		alert("Incorrecto, vuelve a intentarlo");
	}
});
