/**
 - The deck of cards []
    A deck of cards contains 4 suits: hearts, diamonds, spades, clubs
    each suit contains the values: 2,3,4,5,6,7,8,9,10,J,Q,K,A
- The drawn cards []
The functionality to:
    - initialize a new deck of cards
    - draw a card
    - draw multiple cards
    - shuffle the deck
 */

/**
 * [
 *   "hearts 2",
 *   "hearts 3",
 *   "hearts 4",
 *   "diamonds 2",
 *   "diamonds 3",
 *   "diamonds 4",
 *   ...
 * ]

 * [
 *   "2 hearts",
 *   "3 hearts",
 *   "4 hearts",
 *   "2 diamonds",
 *   "3 diamonds",
 *   "4 diamonds",
 *   ...
 * ]
 * 
 * [
 *  {
 *      value: 2,
 *      suit: "hearts"
 *  },
 *  {
 *      value: 3,
 *      suit: "hearts"
 *  },
 *  {
 *      value: 2,
 *      suit: "spades"
 *  },
 *  {
 *      value: "A",
 *      suit: "spades"
 *  },
 * ]
 * 
 * card.value;
 * card.suit;
 * 
 * let card = "2 hearts";
 * let cardSplit = card.split(" ");
 * let cardValue = cardSplit[0];
 * let cardSuit = cardSplit[1];
 */
class Deck {
  constructor() {
    this.deck = [];
    this.drawnCards = [];
  }
  initialize() {
    const suits = ["hearts", "diamonds", "spades", "clubs"];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    for (let suit of suits) {
      for (let value of values) {
        let card = {
          value: value,
          suit: suit,
        };

        this.deck.push(card);

        // alternative option: put the object directly into the push method
        // this.deck.push({
        //   value: value,
        //   suit: suit,
        // });
      }
    }
  }
  draw() {
    // take a card from the deck
    let card = this.deck.pop();
    // add the card to the array drawnCards
    this.drawnCards.push(card);
    // return the card that we have just drawn
    return card;
  }
  drawMultipleCards(number) {
    // we need an array to store the drawn cards
    const hand = [];
    // we have to fill the array with cards according to the "number" parameter
    for (let i = 0; i < number; i++) {
      let card = this.draw();
      hand.push(card);
    }
    // the return value should be an array containing card objects
    return hand;
  }
  shuffle() {
    for (let i = 0; i < this.deck.length; i++) {
      let randomIndex = Math.floor(Math.random() * this.deck.length);
      let temp = this.deck[i];
      this.deck[i] = this.deck[randomIndex];
      this.deck[randomIndex] = temp;
    }
    return this.deck;
  }
  print() {
    console.log();
    console.log("Current deck is:");
    console.log(this.deck);
    console.log("-----------------");
    console.log();
  }
  printDrawnCards() {
    console.log();
    console.log("Drawn cards are:");
    console.log(this.drawnCards);
    console.log("-----------------");
    console.log();
  }
}

const deck1 = new Deck();
deck1.initialize();
deck1.shuffle();
deck1.print();

console.log(deck1.draw());
console.log(deck1.draw());
console.log(deck1.draw());
deck1.printDrawnCards();
let myHand = deck1.drawMultipleCards(5);
let opponentHand = deck1.drawMultipleCards(5);

console.log("my hand", myHand);
console.log("opponent hand", opponentHand);
deck1.printDrawnCards();
