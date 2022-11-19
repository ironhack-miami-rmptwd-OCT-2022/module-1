window.addEventListener("load", () => {
	console.log("Scripts are connected!", { document });
	let myGame;

	// const gameStartButton = document.getElementById('button__next--game-start');
	const gameStartButton = document.querySelector("#button__next--game-start");
	const gamePlayerNumberInput = document.querySelectorAll(
		".game__container--game-start-actions input"
	);
	const preGameActions = document.querySelectorAll(
		".game__container--game-start-actions"
	);
	const gameBoard = document.querySelectorAll(
		".game__container--game-content"
	);

	console.log({
		gameStartButton,
		gamePlayerNumberInput: gamePlayerNumberInput[0].valueAsNumber,
		gameBoard,
		preGameActions,
	});

	gameStartButton.addEventListener("click", () => {
		myGame = new Game(gamePlayerNumberInput[0].valueAsNumber);
		// preGameActions[0].classList.add("hide");
		// gameBoard[0].classList.remove("hide");

		shared.sharedFunctions.toggleHide(preGameActions[0]);
		shared.sharedFunctions.toggleHide(gameBoard[0]);
	});

	// myGame.deck.addDecks(myGame.getNumberOfDecksForGame(2))

	// console.log({
	// 	myGame,
	// 	players: myGame.players,
	// 	deck: myGame.deck.deck,
	// 	deckLength: myGame.deck.deck.length,
	// });
});
