/*
Como leer y traer nodos del arbol DOM

Metodos tradicionales

    - document.getElementById (trae elementos por id)
    - document.getElementsByTagName (trae elementos por etiqueta)
    - document.getElementsByClassName (trae elementos por clase)

*/

//getElementById
//////let titulo = document.getElementById("titulo1");
////////console.log(titulo);

//getElementsByClassName
//////let titulos = document.getElementsByClassName("titulos");
////////console.log(titulos);

//getElementsByTagName
/////////let titulos2 = document.getElementsByTagName("h3");
//////////console.log(titulos2);


/*
Metodos modernos

    - document.querySelector (seleccionar cualquier cosa que se especifique dentro de su argumento, y trae el primer elemento que encuentre)
    
    - document.querySelectorAll (selecciona cualquier cosa que se especifique dentro de su argumento, y trae todos los elementos que encuentre.)
*/

/////let query = document.querySelector("#titulo1");
///////console.log(query);

//////let query2 = document.querySelector(".titulos");
//////console.log(query2);

///////let query3 = document.querySelectorAll(".titulos");
//////////console.log(query3);



////////////////////// Miercoles 9 de Noviembre

let query = document.querySelector("#titulo1");
console.log("Esto es lo que muestro cuando hago querySelector con un id", query);

let query2 = document.querySelector(".titulos");
console.log("Esto es lo que muestro cuando hago querySelector", query2);

let query3 = document.querySelectorAll(".titulos");
console.log("Esto es lo que se muestra cuando hago querySelector All",query3);

/*

Metodos para crear y agregar elementos en el DOM

Este proceso se divide en dos:

    - Crear nodos
        - document.createElement("h3") (este crea etiquetas)
        - document.createTextNode("Este es un mensajito") (este crea textos dentro de las etiquetas)

    Es importante crear nodos del tipo etiqueta, pero tambien agregarles texto

    Estamos creando un elemento, aun no lo agregamos al DOM. Estos elementos se guardan en un espacio de memoria. Es por eso que los estamos asignando a una variable o constante, para poder insertarlo posteriormente en una posicion determinada del DOM.




    - Agregar nodos
        -


*/

// Elementos de informacion del usuario

document.createElement('h1'); // Estoy creando un elemento h1
document.createElement('img1');
document.createComment('Este es un comentario');

// Guardar estos elementos en espacios de memoria o variables para los cuates

const etiquetaH1 = documnt.createElement('h1');
var img = document.createElement('img1');
let texto = document.createElement('p');
const comentario = document.createComment('Este es un comentario');

/* 
agregar nodos 
- parentElement.appendChild
- parentElement.append
- parentElement.insertBefore
 - parentElement.insertAdjacentElement 
 
 .appendchild: metodo mas comun para agregar elementos HTML. Agrega elementos como hijos 
 para ponerlo debemos tomar dos cosas en cuenta;

 1. Elemento de referencia o elemento padre
 2. Elemento que quiero agregar

 */

const ElementoPadre = document.querySelector('#DIF');
// obtengo el elemento padre

const h3 = document.createElement('h3');
// creo al nodo a insertar 

ElementoPadre..appendChild(h3);
// en el elemento hijo padre, voy a meter a mi hijo 


// Insertar el texto en el H3
h3.appendChild(textoh3);

// insertar elemento 
ElementoPadre.appendChild(h3); // en el elemento padre, voy a meter a mi hijo

// Crear un nodo de tipo imagen 
const img = document. createElement('img');


//inserto en el documento
ElementoPadre.appendChild(imgNodo);
console.log(imgNodo);

// Como accedo a las propiedades de img (de cualquier elemento)
imgNodo.src = "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg";
imgNodo.alt = 'Fuente de busqueda';        

/*Otras formas de leer y agregar nodos (esto se usa mas para elementos que ya existen)

    - outer.HTML (leer)
    - node.innerHTML (escribir)

*/