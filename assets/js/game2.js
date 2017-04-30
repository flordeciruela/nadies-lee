var drag = document.getElementById("drag");
/*
document.addEventListener("dragstart", function(event) {
	event.dataTransfer.setData("text", event.target.id);
	//event.dataTransfer.dropEffect = "copy";
	//event.dataTransfer.effectAllowed = 'copy';
});

drag.addEventListener("drop", function(event) {
	event.preventDefault();
	var data = event.dataTransfer.getData("text");
	event.target.appendChild(data);
});

drag.addEventListener("dragover", function(event) {
	event.preventDefault();
});
*/
var games = document.getElementById("games");
var play2 = document.getElementById("play-2");
var ordenParrafos = document.getElementById('orden-parrafos');
play2.addEventListener("click", function(event) {
	if(ordenParrafos.value == "1-2-3-4") {
		alert("Has ganado 4 puntos!!");
		window.location = "game3.html";
	} else {
		alert("Incorrecto, vuelve a intentarlo");
	}
});
