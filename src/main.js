class Vehicle  {
  constructor(size, year) {
    this.size = size;
    this.year = year;
    console.log('Vroom');
  }
}
const truck = new Vehicle ('big', 2008);
console.log(truck);

class Truck extends Vehicle {
  constructor(size, year, make, model) {
    super(size, year);
    this.make = make;
    this.model =model;
  }
}
