
//Seleccionar elementos por ID (getElementById())
const contenedor = document.getElementById('contenedor');
console.log(contenedor.innerHTML);

const titulo = document.getElementById('titulo');
console.log(titulo);
console.log(titulo.innerText);
console.log(titulo.tagName);

//Seleccionar elementos por clases (getElementByClassName())
const toppings = document.getElementsByClassName('topping');
console.log(toppings);//nos devuelve HTMLCollection(4)--> un array con 4 elementos
console.log(toppings.length);
console.log(toppings[0]);//tenemos acceso al primer elemento de ese array
console.log(toppings[0].id)//conocemos el id de ese elemento

//Seleccionar elementos en base a su etiqueta, va a ser una búsqueda más general, no hace falta que tengan id o clases. (getElementsByTagName())
const misToppings = document.getElementsByTagName('li');
console.log(misToppings);

//Seleccionar elementos en base a un selector css (querySelector() y querySelectorAll()). Estos métodos son útiles cuando necesitas un proceso de seleccion más específica.
//querySelector() --> Nos permite seleccionar el primer elemento que cumpla ese criterio 
const aceitunas = document.querySelector('#aceitunas');
console.log(aceitunas);

const primerItem = document.querySelector('.topping'); //nos saca el primer item por clase
console.log(primerItem);

const fondoNaranja = document.querySelector('.topping.fondo-naranja');//Si queremos seleccionar el primer elemento que tenga una clase y un id, o dos clases o más clases 
console.log(fondoNaranja);

const elementoFondoNaranja= document.querySelector('ul li.fondo-naranja');
console.log(elementoFondoNaranja);

const primerToppingNoMarron= document.querySelector('ul li:not(.fondo-marron');
console.log(primerToppingNoMarron);

//querySelectorAll()--> Nos permite seleccionar todos los que cumplan con el criterio
 const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
 console.log(toppingsNaranja);//Nos devuelve una lista de nodos.  
 console.log(toppingsNaranja.length);



