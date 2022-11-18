// export const randomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);
// these 2 functions are the same bu when you create a shared file, you should create function in vanilla format.
// export function randomNumber(maxNumber) {
// 	return Math.floor(Math.random() * maxNumber);
// }

// import randomNumber from '../shared/sharedFunctions/randomNumbers';

const shared = {
	sharedFunctions: {
		randomNumber: (maxNumber, minNumber) => {
			minNumber = minNumber ? minNumber : 0;
			maxNumber = minNumber ? maxNumber - minNumber : maxNumber;

			return Math.floor(Math.random() * maxNumber + minNumber);
		},
		// randomNumber: randomNumber
	},
	sharedVariables: {
		dealerName: "Dealer",
	},
};
