
//Variables globales
var miCarta = document.getElementById("mi-carta");
var tiempoCarta = 3000;
var direccionCartas = [];
var i = 0;


//Recorre las rutas de las cartas para almacenar su direccion
for (let i = 1; i <= 54; i++) {
    direccionCartas.push(`assets/loteria/${i}loteria.jpg`);
}


//Recorre el arreglo para mostrar la carta
cartaPorTiempo = setInterval(function() {
    if (i <= direccionCartas.length - 1) {
        miCarta.src = direccionCartas[i];
    }
    i++;
}, tiempoCarta);