function Pizza(size, meat, toppings) {
  this.size = size;
  this.meat = meat;
  this.toppings = [];
}

var sizeCost = 0;

Pizza.prototype.pizzaSizeCost = function(size) {
  if (this.size === small) {
    sizeCost += 10;
  } else if (this.size === medium) {
    sizeCost += 12;
  } else {
    sizeCost += 14;
  }
  return(sizeCost);
}
