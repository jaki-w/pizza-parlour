function Pizza(size, meat,) {
  this.size = size;
  this.meat = meat;
  // this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function() {
  var pizzaCost = 0;
  if (this.size === "small" && this.meat == 1) {
    pizzaCost += 10;
  } else if (this.size === "small" && this.meat == 2 || this.size === "medium" && this.meat == 1) {
    pizzaCost += 12;
  } else if (this.size === "medium" && this.meat == 2 || this.size === "large" && this.meat == 1) {
    pizzaCost += 14;
  } else if (this.size === "large" && this.meat == 2) {
    pizzaCost += 16;
  }
  // for (var i=0; i< this.toppings.length; i++) {
  //   pizzaCost += 1;
  // }
  return(pizzaCost);
}

$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
    var customPizzaOrder = new Pizza(customSize, customMeat);
    var customSize = $("input:radio[name=pizzaSize]:checked").val();
    var customMeat = $("input:radio[name=pizzaMeat]:checked").val();
    // var customToppings = [];
    // $("input:checkbox[name=pizzaToppings]:checked").each(function() {
    //   var checkedTopping = $(this).val();
    //   $(customToppings).push(checkedTopping);
    // });
    customPizzaOrder.pizzaPrice();
    console.log(Pizza.pizzaPrice);
    // console.log(customToppings);
    console.log(customSize);
    console.log(customMeat);
    console.log(customPizzaOrder);
  });
});
