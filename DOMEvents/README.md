## Evento
Es "algo" que ocurre en el sitio web como resultado de interacción con el usuario o por otra causa como cambios en el estado del dispositivo o de la ventana.

### Eventos más comunes

- Click:cuando usamos el ratón para interactura con los elementos y hacemos click sobre algo(botón, img, formulario...) cada uno de los clik se registra como un evento en el navegador y el navegador va a saber sobre cuál de esos elementos se hizo el evento. Y vamos a poder decir en caso de que ocurra ese click que es lo que va a pasar en nuestro código.

- Presionar una tecla: podemos lograr que ciertos elementos que nos interesen en el DOM sepan cuando ocurre uno de esos eventos, cuál de esos elementos deberia reaccionar en base a ese evento y también, cuál de esas teclas fue presionada.
Un caso común de presionar tecla sería un juego: si estas desarrollando un juego interactivo en JS y el usuario presiona alguna de las teclas (izq, dcha...)todos esos eventos quedarían registrados y podriamos manejarlo  de acuerdo a la tecla presionada.

-Evento de arrastrar: por ejemplo cuando en una web te piden que arrastres una img para subir esa img a la web.

-Eventos táctiles: eventos que podamos manejar en dispositivos touch, puedes manejar distintos gestos que realice el usuario.

### Eventos que voy a utilizar

-Cursor (como el click)
-Teclado (presión teclas)

### Conceptos importantes a tener en cuenta

-Elemento target: hace referencia al elemento que va a recibir el evento. Este elemento va a decirle al navegador que ahí ha ocurrido un evento y que como lo maneja.

-Trigger: es un desencadenante. Es la acción que va a desencadenar un evento. 

-Event Handler: Handler significa el que maneja. Hace referencia a la función que se ejecuta cuando ocurre un evento. Nosotros vamos a asociar en nuestro código un tipo de evento con una función para decirle al navegador que cuando ocurra un evento específico en un elemento específico vamos a llamar a una función específica. Es decir, asociamos, el elemento, el evento y la función que lo va a manejar si ocurre. 

-Event Listener: es la asociación entre un evento específico en un elemento y la función que lo va a manejar. Cuando creamos un event listener estamos "escuchando" ese evento.
Event handler y event listener se suelen utilizar de manera equivalente.


