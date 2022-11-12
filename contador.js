// Asignar variables para trabajar con elementos del front (html)

let botonAumentar = document.querySelector('#Aumentar');
let botonDisminuir = document.querySelector('#Disminuir');
let botonResetear = document.querySelector('#Resetear');
let botonRandom = document.querySelector('#ImagenRandom');
let contador = document.querySelector('#contador');
let contenedorImagen = document.querySelector('#contenedorImagen');

var valorContador = 0  // mi contador empieza en 0 

// Como le voy a hacer para entender que cada que pulse o de click en
// boton, se ejecute algo 

// funcion para aumentar
function aumentar() {
    valorContador++; //el valor del contador aumenta de 1 en 1
    contador.innerHTML = valorContador; // con innerHTML pongo del valor en el front

}

botonAumentar.addEventListener("click", aumentar);
//Explicacion de la funcion suma: tomo el valor del contador que 
//es cero,y cada que se ejecuta esta funcion aumentare de 1 en 1, s
//ese valor lo quiero ver reflejado en un espacio del HTML que sellama 
//contador. Ese contador, ira tomando el valor respectivo de la variable 
//(variable que se modifica cada que doy clic)


// funcion para diminuir

function Disminuir() {
    valorContador--; 
    contador.innerHTML = valorContador; 


}

botonDisminuir.addEventListener("click", Disminuir);


// funcion para resetear

function Resetear() {
    valorContador = 0;
    contador.innerHTML = valorContador;


}
botonResetear.addEventListener("click", Resetear);

// funcion para poner imagen

function Random(){
    const ImagenRandom = document.createElement('img');
    ImagenRandom.src = "https://picsum.photos/500";
    ImagenRandom.alt = "imagen random del dia";

    document.body.appendChild(ImagenRandom);
}

botonRandom.addEventListener("click", Random);

