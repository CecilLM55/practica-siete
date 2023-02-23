// Node tiene su propio emisor de eventos, el de abajo.
var Emitter = require('events');
const config = require('./config');


//var Emitter = require('./emitter');
var emtr = new Emitter();
// al mandar a llamar se mandan los resultados, se usa on para crear una nueva funcion.
emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

// Se sustituye y de esa manera no se tienen strings y al cambiar valores no echa a perder el codigo.
emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!');
});

// se usa el emit para llamar la funcion.
console.log('Hello!');
emtr.emit(config.events.GREET);



emtr.on(config.events.JUMP, () => {
    console.log('Someone jumped!');
});
//se llama emitter y se pueden observar las dos funciones.
console.log(emtr);
//se llama especificamente jump, donde tiene que tener el mismo nombre de la misma manera.
emtr.emit(config.events.JUMP);