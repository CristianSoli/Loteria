
//Variables globales
var miCarta = document.getElementById("mi-carta");
var tiempoCarta = 2000;
var direccionCartas = [];
var i = 0;
var percent = 0;
var banderaBoton = 0;

//Constantes
const progressBar = document.querySelector('.barra-progresiva');
const scrollContainer = document.getElementById("contenedor-scroll");
const imageContainer = document.getElementById("contenedor-imagenes");
const numerosAleatorios = ordenarAleatorio(direccionCartas);
const recargarPagina = document.getElementById("boton-reiniciar");

const mostrarPorcentaje = document.getElementById("numeroPorcentaje");
scrollContainer.appendChild(imageContainer);



//Recorre las rutas de las cartas para almacenar su direccion
for (let i = 1; i <= 54; i++) {
    direccionCartas.push(`assets/loteria/${i}loteria.jpg`);
}


//Recorre el arreglo para mostrar la carta
function recorrerCartas(){
        cartaPorTiempo = setInterval(function() {
        //El valor de la direccion sera igual al arreglo de las direcciones en la posicion del indice
        miCarta.src = numerosAleatorios[i];

        if(i != 0){
          // Crear un elemento img
          const imgElement = document.createElement("img");
          // Establecer el atributo "src" de la imagen y su altura
          imgElement.setAttribute("src", `${numerosAleatorios[i -1]}`);
          imgElement.setAttribute("height", "140px");
          // Agregar el elemento imagen al contenedor contenedor-imagen
          imageContainer.appendChild(imgElement);
          
          

          
        }
        if (i <= direccionCartas.length - 1) {
        
        //Calcula el porcentaje de la barra
        percent = ((100*i)/(direccionCartas.length - 1));

        //Cambia el porcentaje de la barra progresiva
        progressBar.style.width = `${percent}%`;
        i++;
        }
        else{
          //Deja fija la ultima carta
          miCarta.src = numerosAleatorios[numerosAleatorios.length - 1] ;

          //Detiene el intervalo en el que se muestran las cartas
          clearInterval(cartaPorTiempo);
        }
        
      }, tiempoCarta);
}   
  

    
      
    

//Funcion para ordenar las cartas aleatoriamente
function ordenarAleatorio(array) {
    // Empezamos desde el último elemento y nos movemos hacia atrás
    for (let i = array.length - 1; i > 0 ; i--) {
      // Generamos un índice aleatorio entre 0 y i
        const j = Math.floor(Math.random() * (i + 1));
      // Intercambiamos los elementos en las posiciones i y j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

recargarPagina.addEventListener("click", function() {

    if(banderaBoton != 1) {
      recorrerCartas();
      banderaBoton = 1;
      recargarPagina.innerHTML = `reiniciar`
    }
    
    else{
      location.reload();
    }
});

ordenarAleatorio(direccionCartas);













