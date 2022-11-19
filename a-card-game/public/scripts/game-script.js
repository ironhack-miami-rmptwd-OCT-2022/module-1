const displayTypeEnum = {
	startGame: "startGame",
	dealerTurn: "dealerTurn",
	playerTurn: "playerTurn",
	distributeCards: "distributeCards",
};

const actionsEnum = {
	deal: "deal",
	hit: "hit",
	stay: "stay",
	doubleDown: "doubleDown",
	fold: "fold",
	call: "call",
	split: "split",
};
let myGame;

window.addEventListener("load", () => {
	console.log("Scripts are connected!", { document });

	const gameStartButton = document.querySelector("#button__next--game-start");
	const gamePlayerNumberInput = document.querySelectorAll(
		".game__container--game-start-actions input"
	);
	const preGameActions = document.querySelectorAll(
		".game__container--game-start-actions"
	);
	const gameBoard = document.querySelectorAll(".game__container--game-board");
	const dealerContainer = document.querySelectorAll(
		".game__container--game-board-dealer"
	);
	const additionalPlayerContainer = document.querySelectorAll(
		".game__container--game-board-additional_players"
	);
	const displayGameboardMessage = document.querySelectorAll(
		".game__container--game-board-additional_players_display-center h3"
	);
	const gameboardActions = document.querySelectorAll(
		".game__container--game-board-additional_players_display-center div.game__container--game-board-additional_players_display-center--actions"
	);
	const playerContainer = document.querySelectorAll(
		".game__container--game-board-player"
	);

	// this is for organization.
	// try to keep your functions organized the same way you would a file for readability. Variables on top, functions to be used in the middle, actual functionality after the functions.

	function generateGameBoardCards(gameElement, playerElement) {
		// console.log({ gameElement, playerElement });
		let gameDiv = document.createElement("div");
	}
	// enum: setting the values that can be used for the messageType
	function displayMessage(messageType) {
		const displayMessageTypes = {
			startGame: "Game Start",
			dealerTurn: "Dealers Turn",
			playerTurn: "Player's Turn",
			distributeCards: "Click to tell dealer to pass out cards!",
		};

		return displayMessageTypes[messageType];
	}

	function displayGameActions(gameActionsArray) {
		gameActionsArray.forEach((action) => {
			shared.sharedFunctions.toggleHide(
				document.querySelector(`#action-${action}`)
			);
		});

		// this is to make the html you are going to modify be a clean slate. Clears it of all html content.
		// gameboardActions.innerHTML = "";
		// console.log({ gameActionsArray });

		// let actionsDiv = document.createElement("div");

		// gameActionsArray.forEach((action) => {
		// 	console.log({ actionStart: action, actionsDiv });
		// 	actionsDiv = `
		// 			<button onclick="handleAction(${action})" >
		// 		 		${action}
		// 		 	<button />
		// 		 `;
		// 	console.log({ actionEnd: action, actionsDiv });
		// });

		// gameboardActions[0].innerHTML = actionsDiv;
		// 	gameboardActions[0].innerHTML = `
		// 	<button onclick="handleAction(${"action"})" >
		// 		 ${"action"}
		// 	 <button />
		//  `;
		// gameboardActions[0].appendChild(actionsDiv);
		// *** you would use append child when you are adding to any container that already has content. When you clear out the HTML initially like we did here (ie: gameboardActions.innerHTML = ""), then you would have to set the innerHTML again before you could use appendChild.
	}

	// function handleAction(actionToHandle) {
	// 	console.log({ actionToHandle });
	// }

	console.log({
		// gameStartButton,
		// gamePlayerNumberInput: gamePlayerNumberInput[0].valueAsNumber,
		// gameBoard,
		// preGameActions,
		// dealerContainer,
		// additionalPlayerContainer,
		// playerContainer,
	});

	gameStartButton.addEventListener("click", () => {
		myGame = new Game(gamePlayerNumberInput[0].valueAsNumber);

		shared.sharedFunctions.toggleHide(preGameActions[0]);
		shared.sharedFunctions.toggleHide(gameBoard[0]);

		// console.log({ myGame, displayGameboardMessage });
		// generateGameBoardCards(myGame, myGame.dealer);
		displayGameboardMessage[0].innerHTML = displayMessage(
			displayTypeEnum.distributeCards
		);

		displayGameActions([actionsEnum.deal]);
	});
});

function handleAction(actionToHandle) {
	console.log("Action!!");
	console.log({ actionToHandle });
	switch (actionToHandle) {
		case actionsEnum.deal:
			myGame.distributeStartingCards();
			break;
		default:
			break;
	}

	console.log({
		dealtCards: myGame,
		playerHands: myGame.players,
		dealer: myGame.dealer,
	});
}
