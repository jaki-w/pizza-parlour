function Pizza(size, meat, toppings) {
  this.size = size;
  this.meat = meat;
  this.toppings = [];
}

Pizza.prototype.pizzaBaseCost = function(this.size, this.meat) {
  var sizeCost = 0;
  if (this.size === small && this.meat == 1) {
    sizeCost += 10;
  } else if (this.size === small && this.meat == 2 || this.size === medium && this.meat == 1) {
    sizeCost += 12;
  } else if (this.size === medium && this.meat == 2 || this.size === large && this.meat == 1) {
    sizeCost += 14;
  } else {
    sizeCost += 16;
  }
  return(sizeCost);
}

Pizza.prototype.toppingsCost = function(toppings) {

}

$(document).ready(function() {
  $("button").submit(function(event) {
    event.preventDefault();
    var customPizzaOrder = new Pizza(size, meat, toppings);
    var size = $("input:radio[name=pizzaSize]:checked").val();
    var meat = $("input:radio[name=pizzaMeat]:checked").val();
    $("input:checkbox[name=pizzaToppings]:checked").each(function() {
      var checkedTopping = $(this).val();
      $(Pizza.toppings).push();
    });
  });
});
