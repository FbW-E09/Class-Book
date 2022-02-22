class User {
  // email, name, score
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
    this.isLoggedIn = false;
  }

  login() {
    //   'userEmail' just logged in
    this.loggedIn = true;
    console.log(`${this.email} just logged in`);
    return this;
  }
  logout() {
    //   'userEmail' just logged out
    this.loggedIn = false;
    console.log(`${this.email} just logged out`);
  }
  updateScore() {
    //   add 1 to the score
    this.score++;
    //   'userEmail' score is now 'score'
    console.log(`${this.email} score is now ${this.score}`);
    return this;
  }
}

let userOne = new User('bob@yahoo.com', 'Bob');
console.log(userOne);
userOne.login();
console.log(userOne);
// userOne.login().updateScore().logout();
// userOne.updateScore();
// userOne.updateScore();
