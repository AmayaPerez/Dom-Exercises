//EVENT LISTENER
//Lo primero que hay que hacer es obtener la referencia del elemento en el DOM
const albahaca = document.getElementById('albahaca');
//Función de la primera manera
//function mostrarClick(topping) {
  //  console.log(topping);
//}

function mostrarClick(e) { //e es el evento que se va a representar como un objeto, es el objeto que va a recibir como argumento en este ejemplo "click"
    console.log(e.target);//para ver donde va a ocurrir el evento
    console.log(e.target.innerText);//para ver solo el texto en donode va a ocurrir el evento
}

//Event Listener sólo para el elemento albahaca
//albahaca.addEventListener('click', mostrarClick) //toma dos argumentos, el nombre del evento y el segundo argumento es el nombre de la función que va a manejar ese evento.

//Evento para todos los toppings
const toppings = document.getElementsByClassName('topping');

//function showClick(e) {
  //  console.log(e.target.innerText);
//}

//for (const topping of toppings) {
    //console.log(topping);
    //topping.addEventListener('click', showClick)
//}

//También podriamos añadir la función desde dentto del for of


for (const topping of toppings) {
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
}

