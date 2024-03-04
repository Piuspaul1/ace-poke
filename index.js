class AcePoke {
    constructor() {
      this.deck = this.initializeDeck();
    }
  
    initializeDeck() {
      const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const deck = [];
  
      for (const rank of ranks) {
        for (const suit of suits) {
          deck.push(`${rank} of ${suit}`);
        }
      }
  
      return deck;
    }
  
    shuffleDeck() {
      for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
      }
      console.log('Deck shuffled.');
    }
  
    dealHand(numCards) {
      if (numCards > 0 && numCards <= this.deck.length) {
        const hand = this.deck.splice(0, numCards);
        console.log(`Dealt a hand: ${hand.join(', ')}`);
        return hand;
      } else {
        console.log('Invalid number of cards to deal.');
        return [];
      }
    }
  
    determineWinner(hand1, hand2) {
      // In a real poker game, you'd implement rules to determine the winning hand.
      console.log('Determining the winner...');
      // For simplicity, let's just return the first hand as the winner.
      return hand1;
    }
  }
  
  // Example usage:
  const acePokeGame = new AcePoke();
  acePokeGame.shuffleDeck();
  const player1Hand = acePokeGame.dealHand(5);
  const player2Hand = acePokeGame.dealHand(5);
  const winner = acePokeGame.determineWinner(player1Hand, player2Hand);
  console.log(`The winner is: ${winner.join(', ')}`);
  