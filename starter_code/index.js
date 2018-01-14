const Person = require('./person.js');
const Elevator = require('./elevator.js');

let mainElevator = new Elevator();


let ana = new Person("Ana", 2, 5);
let oriol = new Person("Oriol", 3, 5);
// let belen = new Person("Belén", 1, 4);
// let lola = new Person("Lola", 1, 5);


mainElevator.start();
mainElevator.call(ana);
mainElevator.call(oriol);
