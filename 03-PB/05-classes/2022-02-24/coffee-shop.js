/**
 * Write a class called CoffeeShop, which has three instance variables:

name : a string (basically, of the shop)
menu : an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price.
orders : an empty array

and seven methods:

addOrder: adds the name of the item to the end of the orders array if it exists on the menu. 
    Otherwise, return "This item is currently unavailable!"
fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
listOrders: returns the list of orders taken, otherwise, an empty array.
dueAmount: returns the total amount due for the orders taken.
cheapestItem: returns the name of the cheapest item on the menu.
drinksOnly: returns only the item names of type drink from the menu.
foodOnly: returns only the item names of type food from the menu.
 */

class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrder(item) {
    // check if in the menu exists an item with property name equal to item
    const {orders, menu} = this; 
    let isItemInMenu = menu.find((menuItem) => menuItem.item === item);
    if (isItemInMenu !== undefined) {
      orders.push(item);
      console.log( `Item ${item} added to the orders`);
    } else {
      console.log(`Item ${item} not on the menu`);
    }
    // if it does, add it to the orders
    // otherwise just return an error message
  }
  fulfillOrder() {}
  listOrders() {}
  dueAmount() {}
  cheapestItem() {}
  drinksOnly() {}
  foodOnly() {}
}

const myMenu = [
  { item: "Coffee", type: "drink", price: 3.99 },
  { item: "Croissant", type: "food", price: 1.99 },
  { item: "Cappuccino", type: "drink", price: 4.99 },
  { item: "Tea", type: "drink", price: 2.99 },
  { item: "Orange Juice", type: "drink", price: 5.99 },
  { item: "Espresso", type: "drink", price: 1.99 },
];
const myCoffeeShop = new CoffeeShop("My coffee shop", myMenu);

console.log(myCoffeeShop);

myCoffeeShop.addOrder("Coffee"); // -> item "Coffee" added to the orders
myCoffeeShop.addOrder("Orange Juice"); // -> item "Orange Juice" added to the orders
myCoffeeShop.addOrder("Vegan Bagel"); // -> item "Vegan Bagel" not present in the menu

console.log("Orders:", myCoffeeShop.orders);