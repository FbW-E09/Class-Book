class Deck {
  constructor() {
    this.deck = [];
    this.drawnCards = [];
  }

  initializeDeck() {
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for (let value of values.split(',')) {
      for (let suit of suits) {
        this.deck.push({
          value,
          suit,
        });
      }
    }
  }

  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  }

  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  }
  shuffle() {
    const { deck } = this;
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
      //pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      //swap
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
}

const myDeck = new Deck();
console.log(myDeck);
myDeck.initializeDeck();
console.log(myDeck);
// console.log(myDeck.deck.length);
// const drawnCard = myDeck.drawCard();
// console.log(drawnCard);
// console.log(myDeck);
// console.log(myDeck.deck.length);
// console.log(myDeck.drawMultiple(3));
// console.log(myDeck.deck);
// // console.log(myDeck.deck);
