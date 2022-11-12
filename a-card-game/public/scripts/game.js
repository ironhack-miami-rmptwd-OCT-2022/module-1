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
}
