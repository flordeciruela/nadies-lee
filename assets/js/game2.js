
var play2 = document.getElementById("play-2");
var ordenParrafos = document.getElementById('orden-parrafos');
play2.addEventListener("click", function(event) {
	if(ordenParrafos.value == "2-4-3-1") {
		alert("Has ganado 4 puntos!!");
		document.getElementById("enumerar").reset();
		window.location = "game3.html";
	} else {
		if(ordenParrafos.value.trim().length == 0) {
			alert("Debes completar éste campo");
		} else {
			document.getElementById("enumerar").reset();
			window.location = "game3.html";
		}
	}
});
