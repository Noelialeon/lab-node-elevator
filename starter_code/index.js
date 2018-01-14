const Person = require('./person.js');
const Elevator = require('./elevator.js');

let mainElevator = new Elevator();


let ana = new Person("Ana", 1, 5);
let oriol = new Person("Oriol", 3, 1);
let belen = new Person("Belén", 5, 4);
let lola = new Person("Lola", 2, 5);

setTimeout(() => mainElevator.call(oriol),  2000);
setTimeout(() => mainElevator.call(ana),  4000);
setTimeout(() => mainElevator.call(belen),  6000);
setTimeout(() => mainElevator.call(lola),  8000);

mainElevator.start();