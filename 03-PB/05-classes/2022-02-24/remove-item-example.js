/**
 * remove item from the cart
 *
 * remove(itemName)
 *
 * - search for the item in the cart by name
 *
 * if the item is in the cart, we have 2 cases:
 * - the quantity of the item is bigger than 1
 *      - we simply reduce the quantity by 1
 * - if the quantity is 1, we have to remove the item completely
 *      - we find the index of the item in the cart
 *      - we splice the cart to remove the item
 */

let items = [
  {
    name: "shirt",
    quantity: 2,
  },
  {
    name: "jeans",
    quantity: 1,
  },
];

// let's remove 1 shirt
let shirtItem = items.find((item) => item.name === "shirt");
console.log(shirtItem);

if (shirtItem === undefined) {
    console.log("the item is not in the cart")
} else if(shirtItem.quantity > 1) {
    shirtItem.quantity--;
}  else

console.log(items);