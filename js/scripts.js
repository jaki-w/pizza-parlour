function Pizza(size, meat, toppings) {
  this.size = size;
  this.meat = meat;
  this.toppings = [];
}

Pizza.prototype.pizzaBaseCost = function(size, meat) {
  var sizeCost = 0;
  if (this.size === small && this.meat === 1) {
    sizeCost += 10;
  } else if (this.size === small && this.meat === 2 || this.size === medium && this.meat === 1) {
    sizeCost += 12;
  } else if (this.size === medium && this.meat === 2 || this.size === large && this.meat ===1) {
    sizeCost += 14;
  } else {
    sizeCost += 16;
  }
  return(sizeCost);
}
