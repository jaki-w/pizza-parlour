function Pizza(size, meat, toppings) {
  this.size = size;
  this.meat = meat;
  this.toppings = [];
}

Pizza.prototype.pizzaBaseCost = function(size, meat) {
  var sizeCost = 0;
  if (this.size === small && this.meat === vegetarian) {
    sizeCost += 10;
  } else if (this.size === small && this.meat === pepperoni || this.size === small && meat === sausuage) {
    sizeCost += 12;
  } else if (this.size === medium) {
    sizeCost += 12;
  } else {
    sizeCost += 14;
  }
  return(sizeCost);
}
