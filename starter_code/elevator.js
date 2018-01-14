class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 5;
    this.waitingList = [];
    this.passengers = [];
    this.requests   = [];
    this.direction = 'up';
  }

  start() {
    setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval();
  }

  update() {
    if(this.requests.length === 0){
      this.stop();
    } else if (this.floor > this.requests[0]){
      this.direction = "down";
      this.floorDown();
    } else if (this.floor < this.requests[0]){
      this.direction = "up";
      this.floorUp();
    };
    this.log();
    this._passengersEnter();
    this._passengersLeave();
  }
  
  _passengersEnter() {
    this.passengersInActualFloor = this.waitingList.filter(passengers => passengers.originFloor === this.floor);
    this.passengers.push(...this.passengersInActualFloor);
    this.passangersOnRequest = this.passengersInActualFloor.map(passengers => passengers.destinationFloor)
    this.requests.push(...this.passangersOnRequest);
    this.waitingList = this.waitingList.filter(waitingPassengers => waitingPassengers.originFloor !== this.floor);
    if(this.passengersInActualFloor.length !== 0){
    console.log(`${this.passengersInActualFloor.map(passengers => passengers.name)} has enter the elevator`);
  };
}
  
  _passengersLeave() {
    this.passengersLeaving = this.passengers.filter(passengers => passengers.destinationFloor === this.floor);
    this.passengers = this.passengers.filter(actualPassengers => actualPassengers.destinationFloor !== this.floor);
    this.requests = this.requests.filter(doneRequests => doneRequests !== this.floor);
    if(this.passengersLeaving.length !== 0){
    console.log(`${this.passengersLeaving.map(passengers => passengers.name)} has left the elevator`);
    };
  }
  
  floorUp() {
    if (this.floor < this.MAXFLOOR){
     this.floor++;   
    } else {
      this.direction = 'down';         
      this.floor--; 
    }
  }
  
  floorDown() {
    if (this.floor > 0){
      this.floor--;
    } else {
      this.direction = 'up';
      this.floor++; 
    }
  }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
    console.log(`${person.name} called from ${person.originFloor}`)
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor} | Passengers: ${this.passengers.map(passengers => passengers.name).join(', ')} | Next stop: ${this.requests[0]}`)
  }
}


module.exports = Elevator;