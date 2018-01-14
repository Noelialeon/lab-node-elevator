class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = 'up';
  }

  start() {
    let updateElevator = setInterval(update(), 1000);
  }

  stop() {
    clearInterval(updateElevator);
  }

  update() {
    this.log();
  }
  
  _passengersEnter() {

  }
  
  _passengersLeave() {

  }
  
  floorUp() {
    if (this.floor < this.MAXFLOOR){
     this.floor++;
     this.log();     
    } else {
      console.log("Max Floor reached")
     this.log();           
    }
  }
  
  floorDown() {
    if (this.floor > 0){
      this.floor--;
      this.log();
    } else {
      console.log("Min Floor reached")
     this.log();           
    }
  }

  // call(name, originFloor, destinationFloor) {
  //   let person = new Person(name, originFloor, destinationFloor);
  //   this.requests.push(person);
  // }

  log() {
    console.log(`Direction:${this.direction} | Floor: ${this.floor}`)
  }
}

let mainElevator = new Elevator();



mainElevator.floorUp();
// mainElevator.call("Maria", 1, 3);
console.log(mainElevator.requests);
mainElevator.floorUp();
mainElevator.floorUp();

module.exports = Elevator;