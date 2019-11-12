'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function Vehicle(size, year) {
  _classCallCheck(this, Vehicle);

  this.size = size;
  this.year = year;
  console.log('Vroom');
};

var truck = new Vehicle('big', 2008);
console.log(truck);

var Truck = function (_Vehicle) {
  _inherits(Truck, _Vehicle);

  function Truck(size, year, make, model) {
    _classCallCheck(this, Truck);

    var _this = _possibleConstructorReturn(this, (Truck.__proto__ || Object.getPrototypeOf(Truck)).call(this, size, year));

    _this.make = make;
    _this.model = model;
    return _this;
  }

  _createClass(Truck, [{
    key: 'ecoFriendly',
    value: function ecoFriendly() {
      if (this.size === 'Big') {
        console.log('Buy a Prius!');
      }
    }
  }]);

  return Truck;
}(Vehicle);

var chevySilverado = new Truck('Big', 2008, 'Chevrolet', 'Silverado');
console.log(chevySilverado.year);
chevySilverado.ecoFriendly();