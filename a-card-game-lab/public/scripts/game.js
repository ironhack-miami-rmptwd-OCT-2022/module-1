class Game {
	constructor(numberOfPlayers) {
		this.deck = new Deck(this.getNumberOfDecksForGame(numberOfPlayers));
		this.players = [];
		this.dealer = new Dealer();
		// this.dealer = new Player('Dealer');

		this.addPlayers(numberOfPlayers);
	}

	addPlayers(howManyPlayers) {
		for (let i = 0; i < howManyPlayers; i++) {
			this.players.push(new Player(`Player${i + 1}`));
		}
	}

	getNumberOfDecksForGame(totalPlayers) {
		return totalPlayers % 2 === 0 && totalPlayers > 1
			? totalPlayers / 2
			: Math.floor(totalPlayers / 2);
		//    // ternary statement (if else statement on one line)
		//    totalPlayers % 2 === 0 && totalPlayers > 1 ? totalPlayers / 2 : Math.floor(totalPlayers / 2)

		// if(totalPlayers % 2 === 0 && totalPlayers > 1) {
		//   totalPlayers / 2
		// } else {
		//   Math.floor(totalPlayers / 2)
		// }
	}

	distributeStartingCards() {
		const blackjackStartinghandSize = 2;

		for (let i = 0; i < blackjackStartinghandSize; i++) {
			this.players.forEach((player) => {
				// player.cardsInHand.push(this.deck.getCard())
				player.receiveCard(this.deck.getCard());
				// player.updateHandValue();

				// const playerHandValue = player.cardsInHand.map(card => {
				// 	return card.cardValue
				// })

				// let playerValue = 0

				// playerHandValue.forEach(value => {
				// 	playerValue += value;
				// })

				// player.handValue = playerValue

				// // player.handValue = player.cardsInHand.reduce((acc, currentCard) => {
				// // 	return acc = acc + currentCard.cardValue;
				// // }, 0)
			});

			// this.dealer.cardsInHand.push(this.deck.getCard())
			// this.dealer.handValue = 0
			this.dealer.receiveCard(this.deck.getCard());
			// this.dealer.updateHandValue();
		}
	}

	addCardToPlayerHand(whichPlayer, howMayCards) {
		for (let i = 0; i < howMayCards; i++) {
			whichPlayer.receiveCard(this.deck.getCard());
			whichPlayer.updateHandValue();
		}
	}
}
