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

let gameStartButton;
let gamePlayerNumberInput;
let preGameActions;
let gameBoard;
let dealerContainer;
let additionalPlayerContainer;
let displayGameboardMessage;
let gameboardActions;
let playerContainer;

let myGame;

window.addEventListener("load", () => {
	console.log("Scripts are connected!", { document });

	gameStartButton = document.querySelector("#button__next--game-start");
	gamePlayerNumberInput = document.querySelectorAll(
		".game__container--game-start-actions input"
	);
	preGameActions = document.querySelectorAll(
		".game__container--game-start-actions"
	);
	gameBoard = document.querySelectorAll(".game__container--game-board");
	dealerContainer = document.querySelectorAll(
		".game__container--game-board-dealer"
	);
	additionalPlayerContainer = document.querySelectorAll(
		".game__container--game-board-additional_players"
	);
	displayGameboardMessage = document.querySelectorAll(
		".game__container--game-board-additional_players_display-center h3"
	);
	gameboardActions = document.querySelectorAll(
		".game__container--game-board-additional_players_display-center div.game__container--game-board-additional_players_display-center--actions"
	);
	playerContainer = document.querySelectorAll(
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
			shared.sharedFunctions.removeClass(
				document.querySelector(`#action-${action}`),
				"hide"
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

// this function is outside the window on load event because it is being used by the html and needs to be globally scoped in order for the html elements to be able to call on it.
function handleAction(actionToHandle) {
	console.log("Action!!");
	// console.log({ actionToHandle });
	switch (actionToHandle) {
		case actionsEnum.deal:
			let filteredActions = [];
			for (let anAction in actionsEnum) {
				// console.log({ filterLoop: anAction });
				filteredActions.push(actionsEnum[anAction]);
			}

			// console.log({ filteredActionsBeforeFilter: filteredActions });

			const correctlyFilteredActions = filteredActions.filter(
				(action) => {
					// console.log({
					// 	filter: action,
					// 	enumValue: actionsEnum.deal,
					// 	condition: action !== actionsEnum.deal,
					// });
					return action !== actionsEnum.deal;
				}
			);

			myGame.distributeStartingCards();
			shared.sharedFunctions.addClass(
				document.querySelector(`#action-${actionToHandle}`),
				"hide"
			);
			// console.log({
			// 	correctlyFilteredActions,
			// 	gameboardActions,
			// 	children: [...gameboardActions[0].children],
			// });
			[...gameboardActions[0].children].forEach((actionButton) => {
				const theRealAction = actionButton.id.split("-")[1];
				console.log({
					hasHide: [...actionButton.classList].includes("hide"),
					classList: [...actionButton.classList],
					theRealAction,
				});
				if (
					// [...actionButton.classList].includes("hide") &&
					!correctlyFilteredActions.includes(theRealAction)
				) {
					shared.sharedFunctions.removeClass(actionButton, "hide");
				} else {
					shared.sharedFunctions.addClass(actionButton, "hide");
				}
			});
			break;
		default:
			break;
	}

	// console.log({
	// 	dealtCards: myGame,
	// 	playerHands: myGame.players,
	// 	dealer: myGame.dealer,
	// });
}
