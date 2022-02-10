let products = [
    {
        type: "T-Shirt",
        color: "blue",
        price: 19.99
    },
    {
        type: "Jeans",
        color: "red",
        price: 29.99
    },
    {
        type: "Shirt",
        color: "black",
        price: 39.99
    },
    {
        type: "Jacket",
        color: "brown",
        price: 99.99
    },
    {
        type: "Shoes",
        color: "green",
        price: 49.99
    },
    {
        type: "Hat",
        color: "green",
        price: 19.99
    },
];

// get all the green products
console.log(products.filter((product, index, array) => {
    console.log("whole product", product);
    console.log("product color", product.color);
    // if (product.color === "green") {
    //     return true;
    // } else {
    //    return false; 
    // }

    return product.color === "green";
}))

// get all products that are green and cheaper than 20

console.log(products.filter((product) => {
    return product.color === "green" && product.price < 20;
}))