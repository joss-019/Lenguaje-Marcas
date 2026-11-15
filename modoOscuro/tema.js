
const botonTema = document.getElementById("botonTema");

if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("modo-oscuro");
    botonTema.textContent = "Modo claro";
}

botonTema.addEventListener("click", function () {

    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        localStorage.setItem("tema", "oscuro");
        botonTema.textContent = "Modo claro";
    } else {
        localStorage.setItem("tema", "claro");
        botonTema.textContent = "Modo oscuro";
    }

});
