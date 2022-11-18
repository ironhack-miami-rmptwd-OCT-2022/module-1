window.addEventListener("load", () => {
	console.log("Scripts are connected!", { document });

	const myGame = new Game(2);
	// myGame.deck.addDecks(myGame.getNumberOfDecksForGame(2))

	console.log({
		myGame,
		players: myGame.players,
		deck: myGame.deck.deck,
		deckLength: myGame.deck.deck.length,
	});
});
