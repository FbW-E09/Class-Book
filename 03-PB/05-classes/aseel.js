class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Cart{
    constructor(){
        this.items = [];
    }

    list(){
        console.log("Cart:");
        console.log("----------");

        for (const item of this.items) {
            console.log(" ");
            console.log(`Item: ${item.name}`);
            console.log(`Price: ${item.price}€`);
            console.log(`Quantity: ${item.quantity}`);
            console.log(`Subtotal: ${item.price * item.quantity}€`);
            console.log(" ");
            console.log("---");
        }
    }

    add(product){
        if(this.items.find(item => item.name === product.name))
            return product.quantity += 1;
        else{
            this.items.push(product);
            return product.quantity = 1;
        }       
    }

    remove(productName){
        let toBeRemoved = this.items.find(item => item.name === productName);
        if(toBeRemoved === undefined)
            console.log(`${productName} is not in the cart.`);
        else if(toBeRemoved.quantity > 1)
             toBeRemoved.quantity--;
        else
             this.items.splice(this.items.indexOf(toBeRemoved),1);
    }

    getTotal(){
        let total = this.items.reduce((total, item) => total += item.price * item.quantity, 0);
        return total;
    }

    printTotal(){
        console.log(`Total: ${this.getTotal()}€`);
    }

    shippingCost(){
        if((this.getTotal() > 100))
            return 0;

        let numberOfItems = this.items.reduce((num, item) => num += item.quantity, 0);
        if(numberOfItems < 5)
            return 4.9;
        else
            return 9.9;
    }
}


let myCart = new Cart();
let shoes = new Product("shoes", 15.99);
let shirt = new Product("shirt", 25.99);
let jeans = new Product("jeans", 29.99);

myCart.add(shoes);
myCart.add(shirt);
myCart.add(shirt);
console.log(myCart.add(jeans));

myCart.list();
myCart.printTotal();
console.log(myCart.shippingCost());
myCart.remove("shirt");
myCart.list();

console.log(jeans);
console.log(shirt);