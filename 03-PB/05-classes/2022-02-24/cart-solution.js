class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

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
      item.quantity--;
    } else {
      const itemIndex = this.items.indexOf(item);
      this.items.splice(itemIndex, 1);
    }

    return this.items;
  }
  getTotal() {
    return this.items.reduce((total, next) => {
      total += (next.price * 100) * next.quantity;
      return total;
    }, 0) / 100;
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
      let output = "Cart:\n----------\n\n";
      for (let item of this.items) {
        output += `Item: ${item.name}\nPrice: ${item.price}€\nQuantity: ${item.quantity}\nSubtotal: ${item.price * item.quantity}\n\n---\n\n`;
      }
      console.log(output);
  }
}
let shoes = new Product("shoes", 15.99);
let shirt = new Product("shirt", 25.99);
let jeans = new Product("jeans", 29.99);

let myCart = new Cart();

myCart.add(shirt);
myCart.add(shirt);
myCart.add(shirt);
myCart.add(shoes);
myCart.remove("shirt");
myCart.remove("shoes");
myCart.add(jeans);

console.log(myCart);

console.log(myCart.getTotal());
console.log(myCart.shippingCost());
myCart.list();
