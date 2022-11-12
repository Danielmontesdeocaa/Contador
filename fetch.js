//Ejemplo de un proceso asincrono

console.log("Esqueleto en HTML");

function dosAsync(){
    setTimeout(function(){ //funcion que emula el tiempo de respuesta
        console.log("MercadoPago (API)");
    }, 5000);//milisegundos 1000 milisegundos = 1 segundo
}

function unoAsync(){
    setTimeout(function(){
        console.log("Otra API");
    }, 0);
    dosAsync();
    console.log("Estilos de Boostrap");
}

unoAsync();
console.log("Estilos de CSS");




//Ejemplo programa asincrono con la carnita asada

console.log("Inicio del programa asincrono - Carnita asada");

function servirCarnita() {
    setTimeout(function() {
        console.log("Carnita asada lista");
    }, 1000);
}

function servirBebidas() {
    setTimeout(function() {
        console.log("Bebidas listas");
    }, 0);
    servirCarnita();
    console.log("Botanita lista");
}

servirBebidas();
console.log("Fin del programa asincrono - Carnita asada");

/*
API FETCH (por favor recuerda que es una API WEB)

Con JS vamos a poder conectarnos a datos remotos o a archivos con datos que se encuentran en nuestra computadora, y para poder hacerlo vamos a utilizar una API web que se llama Fetch API.

Fetch API nos permite hacer solicitudes HTTP, es decir, podemos hacer peticiones a un servidor para obtener datos, o enviar datos a un servidor para que los guarde.

Recuerdan las solicitudes HTTP?
     * - GET: Para obtener datos 
     * - POST: Para enviar datos
    - PUT: Para actualizar datos
    - DELETE: Para eliminar datos

para traer los APIs usamos la palabra reservada FETCH 
*/


//Antes de consultar los datos de la API, debemos de "conectar" los datos del HTML con JS

var boton = document.getElementById("boton");
var contenedor = document.getElementById("contenedor");
var mensajeError = document.getElementById("mensajeError");
var posts = null;


boton.addEventListener("click", function(){

    //busco y traigo la informacion de un sitio especifico
    fetch("https://jsonplaceholder.typicode.com/posts/4")
    //Escenario 1: Buscar y encontrar
    //Escenario 2: Buscar y no encontrar
    .then(datos => datos.json())//traigo los datos y los convierto
    .then(datos =>{
        posts = datos //Aqui le digo que posts deja de ser nulo y se va a llenar con los datos que traje del servidor
        mostraDatos(posts);//Aqui estamos llamando a una funcion la cual tiene como chamba pintar mi html con esa informacion
    })
    .catch(error => console.log( "No pudimos traer los datos :(", error,)); //Aqui estamos atrapando los errores que puedan ocurrir en la peticion a la API
});


function mostraDatos(posts){

    //Creando objetos o elementos del HTML
    let titulo = document.createElement("h1");
    let contenido = document.createElement("p");

    //Poner en el HTML
    titulo.innerHTML = posts.title;
    contenido.innerHTML = posts.body;

    contenedor.appendChild(titulo);
    contenedor.appendChild(contenido);


};



var botonStore = document.getElementById("Store");
var contenedorStore = document.getElementById("catalogo");
var productosFake = null; // tener el espacio , aunque no se use

botonStore.addEventListener("click", buscarProductos);

function buscarProductos(){
    fetch ("https://fakestoreapi.com/products/5")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        pintarProductos(data);

    })
    .catch(error => console.log("Upssssss, algo salio pesimo", error));


}

function pintarProductos(productosFake){

    let titulo = document.createElement("h1");
    let description = document.createElement("p");
    let precio = document.createElement("h2");
    let imagen = document.createElement("img");
    let separador = document.createElement("hr");

    titulo.innerHTML = productosFake.title;
    description.innerHTML = productosFake.description;
    precio.innerHTML = productosFake.price;
    imagen.src = productosFake.imagen;
    imagen.width = 100;

    contenedorStore.appendChild(titulo);
    contenedorStore.appendChild(description);
    contenedorStore.appendChild(precio);
    contenedorStore.appendChild(imagen);
    contenedorStore.appendChild(separador);

}

