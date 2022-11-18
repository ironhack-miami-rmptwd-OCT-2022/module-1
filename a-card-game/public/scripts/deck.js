// const { sharedFunctions } = (shared = require("./shared"));
// this code above (import) is destructuring "sharedFunctions" from "shared" which is declared by making that = to the required file.
// when working with client facing js code. The only way to be be able to import/require from another file, would be to add the file as a script in the html the same as you did with all the class js files.

const { sharedFunctions } = shared;

class Deck {
	constructor(numberOfDecks) {
		this.deck = [];
		this.discardPile = [];
		this.cardSuits = ["H", "C", "D", "S"];
		this.cardValues = [
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"J",
			"Q",
			"K",
			"A",
		];

		this.addDecks(numberOfDecks);
	}

	addDecks(howManyDecks) {
		for (let i = 0; i < howManyDecks; i++) {
			// this.deck.push(`Deck${i+1}`)
			this.generateDeck();
		}

		this.shuffle();
	}

	generateDeck() {
		this.cardSuits.forEach((suit) => {
			this.cardValues.forEach((value) => {
				this.deck.push({
					suit,
					value,
					cardValue: this.cardValue(value),
					imageBack: `./public/assets/images/card-backs/card_back_4.jpeg`,
					imageFront: `./public/assets/images/card-fronts/${suit}_${value}.png`,
				});
			});
		});
	}

	cardValue(cardValue) {
		if (["J", "Q", "K"].includes(cardValue)) {
			return 10;
		} else if (cardValue === "A") {
			return 11;
		} else {
			return Number(cardValue);
		}
	}

	shuffle() {
		let arrLength = this.deck.length;

		// console.log({
		// 	shared,
		// 	sharedFunctions,
		// 	randomFunc: sharedFunctions.randomNumber(1),
		// 	arrLength,
		// });

		while (arrLength > 0) {
			// this sharedFunctions object is coming in from the shared file that we created which has any functions, variables, loops, etc that would be needed within multiple files which would not be part of the normal class data.
			let index = sharedFunctions.randomNumber(arrLength);
			// console.log({index})

			arrLength--;

			// let tempIndex = this.deck[index]
			// this.deck[index] = this.deck[arrLength]
			// this.deck[arrLength] = tempIndex

			// the 2 lines above are the same as the one line below code wise. It is basically swapping values
			[this.deck[arrLength], this.deck[index]] = [
				this.deck[index],
				this.deck[arrLength],
			];
		}

		// ********** .   REDUCE  . ************
		// reduce used 4 parameter with 2 being optional and 2 not. First is the accumulator which holds the "accumulated" data for the method. It also uses the 2nd parameter "currentValue" the value of the element at the current index in the loop.
		// the 2 optional values would be 3 "index" which is the current index in the loop, and "currentArray" which is a duplicate of the array being used for the reduce (ie: in this example the currentArray is this.deck);

		// const shuffledDeck = this.deck.reduce(
		// 	(accumulator, currentCard, index, deckArray) => {
		// 		const randomNumberFromDeck = sharedFunctions.randomNumber(
		// 			deckArray.length
		// 		);

		// 		accumulator.push(deckArray[randomNumberFromDeck]);
		// 		deckArray.splice(randomNumberFromDeck, 1);

		// 		return accumulator;
		// 	},
		// 	[]
		// );

		// this.deck = shuffledDeck;

		// *************************************
	}

	reShuffle() {
		const combinedDeckAndDiscardPile = [...this.deck, ...this.discardPile];
		this.deck = combinedDeckAndDiscardPile;
		this.shuffle();
	}

	getCard() {
		const result = this.deck[0];
		// if the deck is already shuffled, then there is no need to get a random card from the array. Just grab the first card and add to the discard pile to reuse later in the reshuffle deck function.
		this.discardPile.push(this.deck[0]);
		this.deck.shift();

		return result;
	}
}
