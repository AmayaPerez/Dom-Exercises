
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

//Asignar estilos con JS
const primerTopping = document.querySelector('.topping');
console.log(primerTopping.style);//vemos en contenido css de ese elemento

primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';

//Acceder al texto 
const listadeToppings = document.getElementById('lista-toppings');
console.log(listadeToppings);
console.log('--innerText--');
console.log(listadeToppings.innerText);//para acceder al texto
console.log('--textContent--');
console.log(listadeToppings.textContent);//Deja la misma identacion que tenemos en nuestra estructura HTML
console.log('--innerHTML--');
console.log(listadeToppings.innerHTML);//Retorna la estructura HTML interna de ese elemento

//Modificar texto
const title = document.getElementById('titulo');
console.log(title.innerText);
title.innerText = 'Mis Toppings Favoritos'; //cambiamos el texto

//Atributos -- vamos a ver como despues del listado de toppings vamos a agregar un enlace 
const enlace = document.getElementsByTagName('a');
console.log(enlace[0].getAttribute('href'));
//console.log(enlace[0].removeAttribute('href'));//eliminar el atributo
console.log(enlace[0].setAttribute('href', 'www.bing.com'));//para actualizar el atributo

//CLASES
const firstTopping = document.querySelector('.topping');
console.log(firstTopping);
console.log(firstTopping.classList);//cada uno de los elementos que seleccionamos del DOM, tiene una propiedad llamada classList, es decir lista de todas las clases que tiene ese elemento en el DOM//cada uno de los elementos que seleccionamos del DOM, tiene una propiedad llamada classList, es decir lista de todas las clases que tiene ese elemento en el DOM

//Agregar una clase
firstTopping.classList.add('mi-clase');
console.log(firstTopping.classList);

//Verificar si una clase existe
secondTopping = document.querySelector('.fondo-naranja');
console.log(secondTopping);
console.log(secondTopping.classList.contains('topping'));//true
console.log(secondTopping.classList.contains('fondo-negro'));//false

//Eliminar una clase
secondTopping.classList.remove('topping');

//Crear, agregar y eliminar elementos del DOM
//crear un elemento
const listaDeToppings = document.getElementById('lista-toppings');//decimos donde queremos agregar ese nuevo elemento
const toppingNuevo = document.createElement('li');//creamos nuevo elemento

toppingNuevo.classList.add('topping', 'fondo-marron');//le agregamos un estilo mediante las clases
toppingNuevo.innerText ='Queso Extra';

//agregar un nuevo elemento
listaDeToppings.append(toppingNuevo);

//Eliminar un elemento
toppingNuevo.remove();

//Recorrer el DOM
console.log(listaDeToppings.parentElement);//para saber el elemento padre
console.log(listaDeToppings.parentNode);

