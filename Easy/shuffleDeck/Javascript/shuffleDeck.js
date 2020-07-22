let shuffleDeck = function(deck) {
    let swap =  (a, b) => {
        let temp = deck[a];
        deck[a] = deck[b];
        deck[b] = temp;
    };

    for (let i = 0; i < deck.length; i++) {
        let pick = i + Math.floor(Math.random() * (deck.length - i));
        swap(i, pick);
    }
    return deck;
};


let orderedDeck = function() {
    let suits = [ '♥', '♣', '♠', '♦' ];
    let values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
    let deck = [];

    suits.forEach((suit) => {
        values.forEach((value) => {
            deck.push(value + suit);
        });
    });

    return deck;
};

module.exports = {
    shuffleDeck,
    orderedDeck
}