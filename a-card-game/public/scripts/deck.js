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

		while (arrLength > 0) {
			let index = randomNumber(arrLength);
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
	}
}
