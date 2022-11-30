window.addEventListener("load", () => {
	console.log("Script File Connected!");

	const h1Element = document.querySelectorAll("h1");
	const myNextButton = document.querySelector("#button__next--home-page");
	const centeredBody = document.querySelectorAll(".center-content");
	const scoreBoard = document.querySelector(
		".scoreBoard p span.scoreBoard__score--display"
	);
	const scoreButtonIncreasae = document.querySelector(
		".scoreBoard__score--button-increase"
	);
	const scoreButtonDecreasae = document.querySelector(
		".scoreBoard__score--button-decrease"
	);

	// console.log({
	// 	h1Element,
	// 	myNextButton,
	// 	centeredBody,
	// 	scoreBoard,
	// 	scoreButtonIncreasae,
	// 	scoreButtonDecreasae,
	// });

	// change title
	myNextButton.addEventListener("click", () => {
		h1Element[0].innerHTML = "This Is The Real Card Game!";
	});

	// button control
	scoreButtonIncreasae.addEventListener("click", () => {
		scoreBoard.innerHTML = Number(scoreBoard.innerHTML) + 1;
	});

	scoreButtonDecreasae.addEventListener("click", () => {
		if (Number(scoreBoard.innerHTML) > 0) {
			scoreBoard.innerHTML = Number(scoreBoard.innerHTML) - 1;
		}
	});
});
