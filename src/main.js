class Desserts  {
  constructor(type, calories) {
    this.type = type;
    this.calories = calories;
  }
}
class IceCream extends Desserts {
  constructor(type, calories, flavor, scoops) {
    super(size, year);
    this.make = make;
    this.model =model;
  }
  ecoFriendly () {
    if (this.size === 'Big') {
      console.log ('Buy a Prius!');
    }
  }
}

const chevySilverado = new Truck ('Big', 2008, 'Chevrolet', 'Silverado');
console.log (chevySilverado.year);
chevySilverado.ecoFriendly();
