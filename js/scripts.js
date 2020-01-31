function Pizza(size, meat,toppings) {
  this.size = size;
  this.meat = meat;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function() {
  var pizzaCost;
  if (this.size === "small" && this.meat === "1") {
    pizzaCost = 10;
  } else if (this.size === "small" && this.meat === "2" || this.size === "medium" && this.meat === "1") {
    pizzaCost = 12;
  } else if (this.size === "medium" && this.meat === "2" || this.size === "large" && this.meat === "1") {
    pizzaCost = 14;
  } else if (this.size === "large" && this.meat === "2") {
    pizzaCost = 16;
  }
  return pizzaCost;
}

$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
    var customSize = $("input:radio[name=pizzaSize]:checked").val();
    var customMeat = $("input:radio[name=pizzaMeat]:checked").val();
    var customPizzaOrder = new Pizza(customSize, customMeat);
    var finalPizzaCost = customPizzaOrder.pizzaPrice();

    console.log(finalPizzaCost);
    console.log(customSize);
    console.log(customMeat);
    console.log(customPizzaOrder);
  });
});
