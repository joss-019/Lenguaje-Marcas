


function PiedraPapelTijera(jugador, maquina) {

    if (jugador === maquina) {
        console.log("Empate");
        alert("Empate");

    } else if (
        jugador == "piedra" && maquina == "tijera" ||
        jugador == "papel" && maquina == "piedra" ||
        jugador == "tijera" && maquina == "papel"
    ) {
        console.log("Gana jugador");
        alert("Gana jugador");

    } else {
        console.log("Gana maquina");
        alert("Gana maquina");
    }
}


function GanaJugador() {

    let jugador = document.getElementById("pantalla").value;

    let opciones = ["piedra", "papel", "tijera"];

    let maquina = opciones[Math.floor(Math.random() * opciones.length)];

    PiedraPapelTijera(jugador, maquina);
}
