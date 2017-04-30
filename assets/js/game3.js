
var play3 = document.getElementById("play-3");

var eliminarParrafo = document.getElementById("eliminar-parrafo");

play3.addEventListener("click", function(event) {
	if(eliminarParrafo.value == "3") {
		alert("Has ganado 4 puntos!!");
		window.location = "finish.html";
	} else {
		if(eliminarParrafo.value.trim().length == 0) {
			alert("Debes completar éste campo");
		} else {
			document.getElementById("eliminar").reset();
			window.location = "finish.html";
		}
	}
});
