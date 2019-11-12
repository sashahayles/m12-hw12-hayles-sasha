'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function Vehicle(size, year) {
  _classCallCheck(this, Vehicle);

  this.size = size;
  this.year = year;
  console.log('Vroom');
};

var truck = new Vehicle('big', 2008);
console.log(truck);