class Player {
	constructor(name) {
		this.cardsInHand = [];
		this.score = 0;
		this.handValue = 0;
		this.name = name;
	}

	updateHandValue() {
		this.handValue = 0;

		this.cardsInHand.forEach((card) => {
			this.handValue += card.cardValue;
		});
	}

	receiveCard(cardReceived) {
		this.cardsInHand.push(cardReceived);

		this.updateHandValue();
	}
}
