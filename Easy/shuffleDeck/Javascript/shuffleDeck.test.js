let {shuffleDeck, orderedDeck} = require('./shuffleDeck.js')
let should = require('chai').should();

describe('shuffleDeck', function() {
    it('should exist', function() {
        should.exist(shuffleDeck);
    });

    it('should be a function', function() {
        shuffleDeck.should.be.a('function');
    });

    it('should return an array', function() {
        let result = shuffleDeck(orderedDeck());
        should.exist(result);
        result.should.be.an.instanceof(Array);
    });

    it('should return an array with every card in the deck', function() {
        let input = orderedDeck();
        let control = orderedDeck();
        let result = shuffleDeck(input);
        for (let i = 0; i < control.length; i++) {
            result.should.contain(control[i]);
        }
        for (let i = 0; i < result.length; i++) {
            control.should.contain(result[i]);
        }
    });

    it('should not return the deck in input order', function() {
        let input = orderedDeck();
        let control = orderedDeck();
        let result = shuffleDeck(input);
        result.should.not.eql(control);
    });

    it('should not return the deck in the same order twice', function() {
        let input1 = orderedDeck();
        let input2 = orderedDeck();
        let result1 = shuffleDeck(input1);
        let result2 = shuffleDeck(input2);

        result1.should.not.eql(result2);
    });

    it('should not have any bias from a uniform distribution', function () {
        let deck = orderedDeck();
        let cardPositionCounts = {};
        for (let i = 0; i < deck.length; i++) {
            let cardPosition = cardPositionCounts[deck[i]] = {};
            for (let j = 0; j < deck.length; j++) {
                cardPosition[j] = 0;
            }
        }
        let iterations = 52 * 10;
        for (let i = 0; i < iterations; i++) {
            deck = orderedDeck();
            let randomDeck = shuffleDeck(deck);
            for (let j = 0; j < randomDeck.length; j++) {
                cardPositionCounts[randomDeck[j]][j] += 1;
            }
        }
        deck = orderedDeck();
        let expected = 10;
        let chi2 = 0;
        for (let i = 0; i < deck.length; i++) {
            let cardPosition = cardPositionCounts[deck[i]];
            for (let j = 0; j < deck.length; j++) {
                chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
            }
        }
        chi2.should.be.approximately(52 * 52, 52 * 10);
    });

    it('EXTRA CREDIT: for large N, should not have any bias from a uniform distribution', function () {
        let orderedArray = function () {
            let output = [];
            for (let i = 0; i < 1000; i++) {
                output.push(i);
            }
            return output;
        };
        let deck = orderedArray();
        let cardPositionCounts = {};
        for (let i = 0; i < deck.length; i++) {
            let cardPosition = cardPositionCounts[deck[i]] = {};
            for (let j = 0; j < deck.length; j++) {
                cardPosition[j] = 0;
            }
        }
        let iterations = 1000 * 5;
        for (let i = 0; i < iterations; i++) {
            deck = orderedArray();
            let randomDeck = shuffleDeck(deck);
            for (let j = 0; j < randomDeck.length; j++) {
                cardPositionCounts[randomDeck[j]][j] += 1;
            }
        }
        deck = orderedArray();
        let expected = 5;
        let chi2 = 0;
        for (let i = 0; i < deck.length; i++) {
            let cardPosition = cardPositionCounts[deck[i]];
            for (let j = 0; j < deck.length; j++) {
                chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
            }
        }
        chi2.should.be.approximately(1000 * 1000, 1000 * 10);
    });
});