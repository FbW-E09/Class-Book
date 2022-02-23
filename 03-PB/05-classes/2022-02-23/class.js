class User {
  constructor(name) {
    this.name = name;
  }

  talk = () => {console.log(`hey, my name is ${this.name}`)}

  play() {
    console.log(`${this} is playing`);
  }
}

class ProUser extends User {
    constructor(name, customName) {
        super(name)
        this.customName = customName;
    }
}

class PremiumUser extends ProUser {
    constructor(name, customName, avatar) {
        super(name, customName)
        this.avatar = avatar;
    }
}

const user1 = new User("Carlo");
const proUser1 = new ProUser("Julia", "Magic Unicorn");
const premiumUser1 = new PremiumUser("Mike", "Mike999", "picture");

console.log(user1);
console.log(user1.talk());
console.log(proUser1);
console.log(premiumUser1);
console.log(Object.getPrototypeOf(proUser1));
console.log(Object.getPrototypeOf(User));
console.log(Object.getPrototypeOf(ProUser));
console.log(Object.getPrototypeOf(PremiumUser));