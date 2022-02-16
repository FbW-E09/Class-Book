let products = [
  {
    type: "T-shirt",
    price: 49.99,
  },
  {
    type: "Hat",
    price: 19.99,
  },
  {
    type: "Shoes",
    price: 59.99,
  },
  {
    type: "Jacket",
    price: 29.99,
  },
  {
    type: "Skirt",
    price: 39.99,
  },
];

function ascendingPrice(productA, productB) {

    return productA.price - productB.price;
}

let sortedProducts = [...products].sort(ascendingPrice);
console.log(sortedProducts);