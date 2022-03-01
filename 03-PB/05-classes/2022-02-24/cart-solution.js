class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// list(): this method should output a nicely formatted list of all the products in the cart to the console (see example below)

// add(product): the add method accepts a product object as input and adds it to the cart. Besides saving the product in the items array, the add method also sets the quantity for the item: if an item with the same name is already in the cart, it just increases its quantity, otherwise it sets it to 1

// remove(name): finds a cart item by name and decreases the quantity by 1. If the quantity becomes 0, completely removes the item from the cart

// getTotal(): prints the total cost of the items in the cart. The total should take into account also the quantity of each item

// shippingCost(): it returns 0 if the total of the cart is more than 100. Otherwise it returns 4.9, if the number of items in the cart is less than 5. If it's more, then it returns 9.9

class Cart {
  items = [];

  add(product) {
    let item = this.items.find((item) => item.name === product.name);

    if (item === undefined) {
      const newItem = { ...product };
      newItem.quantity = 1;
      return this.items.push(newItem);
    } else {
      item.quantity++;
      return this.items;
    }
  }

  remove(itemName) {
    const item = this.items.find((item) => item.name === itemName);
    if (item === undefined) {
      console.log(`Item ${itemName} was not in the cart`);
    } else if (item && item.quantity > 1) {
    } else {
      const itemIndex = this.items.indexOf(item);
      this.items.splice(itemIndex, 1);
    }

    return this.items;
  }
  getTotal() {
    return (
      this.items.reduce((total, next) => {
        total += next.price * 100 * next.quantity;
        return total;
      }, 0) / 100
    );
  }

  shippingCost() {
    const total = this.getTotal();
    if (total > 100) {
      return 0;
    }
    let itemsInCart = this.items.reduce(
      (result, next) => (result += next.quantity),
      0
    );
    if (itemsInCart < 5) {
      return 4.9;
    } else {
      return 9.9;
    }
  }
  list() {
    let output = 'Cart:\n----------\n\n';
    for (let item of this.items) {
      output += `Item: ${item.name}\nPrice: ${item.price}€\nQuantity: ${
        item.quantity
      }\nSubtotal: ${item.price * item.quantity}\n\n---\n\n`;
    }
    console.log(output);
  }
}
let shoes = new Product('shoes', 15.99);
let shirt = new Product('shirt', 25.99);
let jeans = new Product('jeans', 29.99);

let myCart = new Cart();

myCart.add(shirt);
myCart.add(shirt);
myCart.add(shirt);
myCart.add(shoes);
console.log(myCart);
myCart.remove('shirt');
myCart.remove('shoes');
myCart.add(jeans);

console.log(myCart);

// console.log(myCart.getTotal());
// console.log(myCart.shippingCost());

// myCart.list();
