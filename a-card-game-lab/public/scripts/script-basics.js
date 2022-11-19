window.addEventListener("load", () => {
	// "window", "document" and "this" are all reserved words and have built in functionality. You should not try to rename or reuse these names for any of your createad variables or any data type.
	console.log("Scripts are connected!", { document });

	// when using the getElementsBy... notice that all but 1 are plural which means that you will receive an array back every time. For the finElementById it is singular and therefore will return the "first instance of" your element with the id your looking for
	// const h1Element = document.getElementsByTagName("h1");
	// const myNextButton = document.getElementById("button__next--home-page");
	// const centeredBody = document.getElementsByClassName("center-content");

	// same as above, if querySelectorAll you will have an array returned, otherwise with querySelector you'll have a single element return.
	const h1Element = document.querySelectorAll("h1");
	const myNextButton = document.querySelector("#button__next--home-page");
	const centeredBody = document.querySelectorAll(".center-content");

	console.log({ h1Element, myNextButton, centeredBody });

	myNextButton.addEventListener("click", () => {
		h1Element[0].innerHTML = "This Is The Real Card Game!";
	});

	const scoreBoard = document.querySelector(
		".scoreBoard p span.scoreBoard__score--display"
	);
	const scoreButtonIncreasae = document.querySelector(
		".scoreBoard__score--button-increase"
	);
	const scoreButtonDecreasae = document.querySelector(
		".scoreBoard__score--button-decrease"
	);

	console.log({ scoreBoard, scoreButtonIncreasae, scoreButtonDecreasae });

	scoreButtonIncreasae.addEventListener("click", () => {
		scoreBoard.innerHTML = Number(scoreBoard.innerHTML) + 1;
	});

	scoreButtonDecreasae.addEventListener("click", () => {
		if (Number(scoreBoard.innerHTML) > 0) {
			scoreBoard.innerHTML = Number(scoreBoard.innerHTML) - 1;
		}
	});
});
