function Pizza(size, meat, toppings) {
  this.size = size;
  this.meat = meat;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function() {
  var pizzaCost;
  if (this.size === "small" && this.meat === "vegetarian") {
    pizzaCost = 10;
  } else if (this.size === "small" && this.meat === "pepperoni" || "small" && this.meat === "sausage" || this.size === "medium" && this.meat === "vegetarian") {
    pizzaCost = 12;
  } else if (this.size === "medium" && this.meat === "pepperoni" || this.size === "medium" && this.meat === "sausage" || this.size === "large" && this.meat === "vegetarian") {
    pizzaCost = 14;
  } else {
    pizzaCost = 16;
  }
  $("#pizzaTotal").text(pizzaCost);
}

Pizza.prototype.pizzaDetails = function(size, meat, toppings) {
  $("#pizzaDetails").empty();
  $("#pizzaDetails").append("<li>Size: " + this.size + "</li>");
  $("#pizzaDetails").append("<li>Meat: " + this.meat + "</li>" + "<br> Toppings:");
  $("input:checkbox[name=pizzaToppings]:checked").each(function() {
    $("#pizzaDetails").append("<li>" + ($(this).val()) + "</li>");
  })
}

$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
    var customSize = $("input:radio[name=pizzaSize]:checked").val();
    var customMeat = $("input:radio[name=pizzaMeat]:checked").val();
    var customPizzaOrder = new Pizza(customSize, customMeat);
    var finalPizzaCost = customPizzaOrder.pizzaPrice();

    customPizzaOrder.pizzaDetails();
  });
});
