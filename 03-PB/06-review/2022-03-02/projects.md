## The Cashier Problem 

Create a program that helps a cashier give adequate change to customers. The program should return the amount of notes and coins for the customer's change. 

Example: If the price is €3.75 and the paid amount is €50, then the client should receive €46.25 back in change. 
* The expected output should be: 
* 2 x €20 // 2 twenty euro notes
* 1 x €5 // 1 five euro note
* 1 x €1 // 1 euro
* 1 x €0.2 // 1 twenty cent coin
* 1 x €0.05 // 1 five cent coin

Example: Price: €4.50, Paid amount: €20, Change: 15.50
* Expected output: 
* 1 x €10
* 1 x €5
* 1 x €0.5

* Notes
* Include outputs for exceptions e.g. price: €4, paid amount: €3. 

---

## Pokemon Lite

Try to make a simplified version of pokemon!

Create a new index.js file.

## Functionality:

* You should have a Pokemon constructor function that creates new pokemon that have name, health, magic and a bunch of skills (the skills can be stored in an array or object).
* You should have an AttackSkill constructor function for creating new attacks. Attacks consumes the pokemon's magic to cause damage to other pokemons. Each individual pokemon has a specific set of attacks. The AttackSkill method should take in three arguments: the name of the attack, the amount of damage the attack does, and the amount of magic the attack requires. For example, here we're creating a 'lightning' attack skill that causes 40 damage, and requires 30 magic: 
```javascript
let lightning = new AttackSkill("lightning", 40, 30);
```
These numbers don't have to be correct or correspond to the real Pokemon numbers at all - you can just make them up.
* A pokemon has no skills when created. It has to use the method learnAttackSkill to learn a new skill. learnAttackSkill should take an attack object as an argument. The specific attacks should be created using the attackSkill constructor function, and then internally added to that Pokemon's 'skills' array. Here is an example of first creating a skill, then adding it to a Pokemon: 
```javascript
let lightning = new AttackSkill("lightning", 40, 30); 
pikachu.learnAttackSkill(lightning);
```
* Your pokemon should have a method called showStatus that console.logs its status (how much health, magic left)
* Your pokemon should have a method called attack which picks one of the pokemon's attack skills to attack another pokemon. This is its most important method! Consider all the possiblites in this method. (e.g what if the pokemon doesn't have enough magic to launch the attack skill?). The attack method should call one of the Pokemon's attack and apply it to the other Pokemon. So for example, if you call the 'lightning' attack (which we created above), it should deal 40 damage to the other Pokemon, and deplete 30 magic from the Pokemon that commited the attack. The attack method should additionally console.log out whether the attack was successful (in other words, whether the attacking pokemon had enough magic to actually carry out the attack), and the result of the attack. The attack method should take in two arguments: the index (or key) of the attack to be used, and the Pokemon object that needs to be attacked. For example, here is an attack being called from Pikachu to Bulbasaur: 
```javascript
pikachu.attack(0, bulbasaur);
```
* Finally create a method called getMagic to help your pokemon add some magic back to your Pokemon (you can choose exactly how much magic should be added back).
* You should create a constructor function to create a pokemon, and then add the methods onto the .prototype property of the constructor function. You should then use that constructor function to create all new pokemon.

* Similarly, you should have a constructor function to create an attackSkill

For example, the following sequence:

```javascript
//Each Pokemon should start with a certain amount of health and magic. For example, here Pikachu starts with 120 health and 80 magic 
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

//Each skill should do a certain amount of damage, and consume a certain amount of magic from the Pokemon that used the skill.
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

//The first argument to `attack` should be the index (or key) of the attack
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);

// should log out the following to the console:

// pikachu launched skill 'lightning' successfully!
// bulbasaur got 40 damage
-------------------
// bulbasaur launched skill 'poison seed' successfully!
// pikachu got 20 damage
-------------------
// pikachu status
// health: 100
// magic: 50
-------------------
// bulbasaur status
// health: 55
// magic: 85
-------------------
// pikachu launched skill 'lightning' successfully!
// bulbasaur got 40 damage
-------------------
// not enough magic, cannot launch attack!
-------------------
// pikachu got 20 magic back
-------------------
// pikachu launched skill 'lightning' successfully!
// bulbasaur got 40 damage
-------------------
// bulbasaur is killed!
-------------------
// bulbasaur is already dead!
// That's just one example. You can call different series of attacks to get different results!
```
## Bonus: Add some more Pokemon and attack types.

---

### Calculator.js 
- A library which contains useful calculation functions based on common formulas (aspect ratio, percentage calculation, etc…)



#### Create a Calculator Class with

- Properties
```js
calculate.pi // Returns PI (3.141592653589793)

calculate.e // Returns Eulner's number (2.718281828459045)
``` 


- Methods
```js
calculate.ratio(x,y,width)  //return height is --- on ratio x:y

calculate.percentage(x,y) // return percentage of x in y.

calculate.add(x, y) // Returns the sum of x added to y.

calculate.subtract(x, y) // Returns the differente of y subtracted to x.

calculate.multiply(x, y) // Returns the product of x multiplied by y.

calculate.divide(x, y) // Returns the quotient of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

calculate.modulation(x, y) // Returns the remainder of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

calculate.elevate(x, y) // Returns the power of x elevated to y.

calculate.sqrt(x) // Returns the square root of x.
```

---

## Project

### String

1. Write a JavaScript function to truncate a string to a certain number of words.

```js
console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"
```

2. Write a JavaScript function to alphabetize a given string.

- Note : Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.

```js
console.log(alphabetize_string("United States"));
//"SUadeeinsttt"
```

3. Write a JavaScript function to convert ASCII to Hexadecimal format.

```js
console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030
```

4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r

```js
console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"
```

5. Write a JavaScript function to get the successor of a string.

`Note`: The successor is calculated by incrementing characters starting from the rightmost alphanumeric (or the rightmost character if there are no alphanumerics) in the string. Incrementing a digit always results in another digit, and incrementing a letter results in another letter of the same case. If the increment generates a carry, the character to the left of it is incremented. This process repeats until there is no carry, adding an additional character if necessary.

```js
string.successor("abcd"); // "abce"
string.successor("THX1138"); // "THX1139"
string.successor("< >"); // "< >"
string.successor("1999zzz"); // "2000aaa"
string.successor("ZZZ9999"); // "AAAA0000"
```

### Object

6. Write a JavaScript function to sort the following array of objects by title value.

```js
var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];
//sorted
/*/* {
  author: "Suzanne Collins",
  libraryID: 3245,
  title:"Mockingjay:The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]*/
```

7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

```js
console.log(num_string_range("a", "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
```

8. Write a JavaScript program to create a Clock.
   `Note`: The output will come every second.

```js
"14:37:42";
"14:37:43";
"14:37:44";
"14:37:45";
"14:37:46";
"14:37:47";

```

9. Write a JavaScript function to print all the methods in an JavaScript object.

```js
console.log(all_properties(Array));
["isArray", "from", "of"]
console.log(all_properties(Math));
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]

```

10. Write a JavaScript function to print all the properties in an JavaScript object.

```js
console.log(all_properties(Math));
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
console.log(all_properties(Array));
["length", "name", "prototype", "isArray", "from", "of"]
```

----


# Bulls and Cows

In this project we will build a two player game that is called **Bulls and Cows**.

![cow icon](assets/cow.svg) ![bull icon](assets/bull.svg)

## Rules

One of the players comes up with a secret number, and the other player tries to guess it.

The secret number must consist of 4 digits and each digit must be **unique**.

For example:

- `1112` would **not** be an acceptable secret number
- `1234` on the other hand is an acceptable value for the secret number, since each digit is unique

After each guess, the player will get a hint to help them guess better next time around.

The hint tells the player how many bulls and how many cows there were. What are bulls and cows?

- If there are any matching digits and they are in their right positions, they are counted as *"bulls"*.
- If in different positions, they are counted as *"cows"*.

For example, with a secret number `4271`:

>
    Player's try: 1234

    Hint: 1 bull and 2 cows


How did we arrive at one bull and two cows?
The bull is the number `2` as it is in the right position.

The cows are `4` and `1`, as they exist in the secret number but they are not in the right position.

Do **not** disclose to the user which digit is a cow and which one is bull, just how many there are (if any).

There is no limit on the number of guesses - guessing continues until the player figures out the other player's secret number.

Once the player has guessed the secret number correctly, display a message to congratulate them.

## Getting the input from the terminal 

Our game will be player vs computer. The computer will come up with a secret number and the player will be trying to guess it.

To gather the player's input we will use an npm package called [`prompt-sync`](https://github.com/heapwolf/prompt-sync).

We can use the package like so:

```js
// Import package
const prompt = require('prompt-sync')({ sigint: true });
// Use package
let name = prompt('What is your name? '); // Note there is a space at the end, so the input does not stick to the question
```

Then the variable name will contain the value that the user entered in the terminal.

Make sure to validate the input to a certain extent. For example:

- it must exist (the user can simply hit enter, but we should not accept this as a valid guess)
- it must be 4 digits
- each of the 4 digits must be unique

## Extra

Let's make this game even better!

If you have the core of the game up and running, 
here are some cool features you can add next:

- Number of attempts to guess the secret number: There will be no limit of guessing, but we can keep track of how many attempts the player needed to solve the puzzle.
- Randomized message every time the user has no bulls and no cows: Instead of always showing the same message, let's create a collection of fun messages every time the guess hits no digits.
- User's name: Let's get the player's name, if they want to share. You can then use the name in the congratulations and  failure messages and hints. If no name is provided, you can use a default like `Player` or `Stranger`. 
- Another round: Once the player has guessed the number correctly, you can ask them to play another round if they want to and restart the game.
- Another round stats: If the user plays multiple rounds, you display the total of games played and the number of attempts for each game.
- Maximum number of attempts: If the user cannot guess in N attemps, they lose the game.
- Configurable game level: The user can choose if they want to play easy or difficult mode. In easy mode, for example, there could be no lmit on the number of attempts, while the difficult level could have a limit.

All the extras are only **optional** - add one or two if you want to have a bigger challenge, but only **after** the core of the game is working. Don't forget to push your code to version control, so you have a working copy to go back to if you need to.

## Deadline

You have ~3,5 days to make the game work.

## Deliverables

A repository containing your code.

**Happy coding!** 🤓


---

# Shrugman

Let's build another guessing game.
One player, makes up a secret word or phrase (we will use movie titles), while the other player tries to guess the word by asking what letters it contains.
However, every wrong guess brings them one step closer to losing.
To indicate how many attempts are left, instead of the usual hanging man drawing, we draw the shrug emoji. It consists of exactly 10 characters:

```bash
¯\_(:/)_/¯
```

Every wrong guess, draws one more piece of the emoji.
If the user has already guessed this letter once, ask them for another letter, instead of couting it as a wrong guess.

The secret movie title is displayed masked - every character except spaces is represented by an underscore `_`. With every correct guess, all ocurrences of the letter are revealed.

Once the game is over, print a list of all games played, and whether they were a win or a loss:

1. Braveheart - win
2. The Godfather - loss

Without adding the extra feature for asking for another round, this list will always have 1 item.

## Requirements

- Use class: Ideally your class is unaware of the `prompt` or the `console`.
- All changes re pushed to your Github repo.

## Extra Features

- Make use of [`console.clear()`](https://www.geeksforgeeks.org/node-js-console-clear-method/), so we only see the most recent state of the word and the shrugman emoji.
- Add guess categories: The user can have mutliple categories to choose from. We already have movies, let's add also books, or quotes. If they choose movies, we will ask them to guess a movie title. If they choose books, we will ask them to guess a book title.
- Ask the user to play another round with the same category.

## Optional

- Use `require` to split into separate files: you should have at least 2 files, one main file and one where the class will live.
- use [chalk](https://www.npmjs.com/package/chalk) to make things a bit more colorful 🌈

## Examples

Take a look at the examples:

When the user wins a round:

![example win](img/example-win.gif)

When the user loses a round:

![example loss](img/example-loss.gif)
