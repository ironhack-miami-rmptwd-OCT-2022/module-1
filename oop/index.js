class Player {
	constructor() {
		this.name = "";
		this.hp = 100;
		this.def = 50;
		this.level = 1;
		this.atk = 20;
	}

	levelUp() {
		this.level += 1;
	}

	attack() {
		return this.atk;
	}

	defend(opponentsAtk) {
		this.hp - opponentsAtk;
	}
}

// very simplified example of what is a class (not the actual structure)
// const player = {
//   constructor: () => ({name: '', hp: 100, def: 50, level: 1, atk: 20}),
//   levelUp: () => {player.constructor.level += 1},
//   somePlayer: new Player()
// }

// ==========================================
// 4 base properties of OOP
// 1. Encapsulation - Having content encapsulated within something else (ie: in this case all the variables and methods in the class);

class SportsPlayer {
	constructor(name, jerseyNumber) {
		this.name = name;
		this.jerseyNumber = jerseyNumber;
		this.stat = {};
	}

	getName() {
		return this.name;
	}

	pass() {
		return "Passing Ball";
	}

	sprint() {
		return "Sprinting";
	}
}

const myPlayer = new Player();
console.log({ name: myPlayer.name });
// console.log returns this
// { name: Player { name: '', hp: 100, def: 50, level: 1, atk: 20 } }

// 2. Abstraction - Hides gthe functional details of the class  ^

const myAthlete = new SportsPlayer();
console.log({ name: myAthlete.getName() });

// good example of a class that is used a lot but does not have to be declared before using (simplified example)
// const random = Math.floor(Math.random() * 50)

// console.log({random: SportsPlayer})

// 3. Inheritance - inheriting methods and variables set from another class

class FootballPlayer extends SportsPlayer {
	constructor(name, jerseyNumber, position) {
		super(name, jerseyNumber);
		this.name = name;
		this.jerseyNumber = jerseyNumber;
		this.position = position;
		this.stats = {};
		this.speed = 1;
	}

	// 4. Polymorphism - morph or change an already existing functionality
	sprint() {
		this.speed += 1;
	}

	normalPace() {
		this.speed = 1;
	}
}

const footballPlayer = new FootballPlayer("Mashino", 10, "Goal Keeper");

console.log({ footballPlayer });
console.log({ footballPlayerSprint: footballPlayer.sprint() });
// output before plymorphism :   { footballPlayer: 'Sprinting' }
// output after plymorphism :   { footballPlayer: undefined } - returns undefined because nothing is being returned in the new sprit function declared in FootballPlayer class.
console.log({ footballPlayer });
