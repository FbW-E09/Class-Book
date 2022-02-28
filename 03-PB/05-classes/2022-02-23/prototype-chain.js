/**
 * We have an online game
 *
 * In the game there are different types of users:
 *
 * - User:
 *   - non registered user
 *   - they have a randomly generated name
 *
 * - Registered user:
 *   - everything a user has
 *   - they can choose and customise their username
 *
 * - Pro user:
 *   - everything a registered user has
 *   - they can customise their outfit in the game
 *
 * - Premium user:
 *   - everything a pro user has
 *   - they can buy special skills for the game
 */



class User {
  constructor() {
    this.name = `Guest_${Math.ceil(Math.random() * 999)}`;
  }

  play() {
    console.log(`User ${this.name} is playing`);
  }
}

class RegisteredUser extends User {
  constructor(name) {
    super();
    this.name = name;
  }
}

class ProUser extends RegisteredUser {
  constructor(name, customOutfit) {
    super(name);
    this.customOutfit = customOutfit;
  }
}

class PremiumUser extends ProUser {
  constructor(name, customOutfit) {
    super(name, customOutfit);
    this.specialSkills = [];
  }

  buySpecialSkill(skill) {
    this.specialSkills.push(skill);
  }
}

let guest1 = new User();
console.log(guest1);
guest1.play();

let registeredUser1 = new RegisteredUser("MadMax123");
console.log(registeredUser1);
registeredUser1.play();

let proUser1 = new ProUser("jjj", "golden armor");
console.log(proUser1);
proUser1.play();


let premiumUser1 = new PremiumUser("premium user", "black robe");
console.log(premiumUser1);
premiumUser1.play();

premiumUser1.buySpecialSkill("fire ball");
premiumUser1.buySpecialSkill("lightning");

console.log(premiumUser1);