alert("El valor js se ejecuta");

function escribir(valor){

    let pantalla = document.getElementById("pantalla");

    if (pantalla.value == "0") {
        pantalla.value = "";
    }

    else {
        pantalla.value = pantalla.value +valor 
    }
}

function borrar(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "0";
}

function resolver(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = eval(pantalla.value);
}

function operar(operador){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = pantalla.value + operador;
}