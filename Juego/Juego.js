


function PiedraPapelTijera(jugador, maquina) {

    if (jugador === maquina) {
        return "¡Empate!";
    }

    else if (
        (jugador === "piedra" && maquina === "tijera") ||
        (jugador === "papel" && maquina === "piedra") ||
        (jugador === "tijera" && maquina === "papel")
    ) {
        return "¡Has ganado!";
    }

    else {
        return "Ha ganado la máquina.";
    }
}


function jugar(jugador) {

    let opciones = ["piedra", "papel", "tijera"];

    let maquina = opciones[Math.floor(Math.random() * opciones.length)];

    let resultado = PiedraPapelTijera(jugador, maquina);

    document.getElementById("resultado").textContent =
        "Tú: " + jugador +
        " | Máquina: " + maquina +
        " | " + resultado;
}
