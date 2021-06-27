"use strict";

// CODING CHALLENGE

// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski"
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze"
    ]
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};
//  CODING CHALLENGE 2

// 1.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goals ${i + 1}:${player}`);
// // 2.
// let average = 0;
// for (const [team, odd] of Object.values()) {
// }

// console.log(properties);
// const calcAverage = (a, b, c) => {
//   return (a + b + c) / properties.length;
//   for(const vals of val.length
//     )
// };

// //  CODING CHALLENGE 1

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2;
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);
// // 5
// const {
//   odds: { team1, x: draw, team2 }
// } = game;
// console.log(team1, team2, draw);

// // 6
// const printGoals = function(...scores) {
//   console.log(...scores, ` scored ${scores.length} goals`);
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// // 7

// team1 < team2 || console.log("team 1 wins");

// 1.
// const players1 = [game.players[0]];
// const players2 = [game.players[1]];
// console.log(players1);
// console.log(players2);
// const [playerx, playerz] = game.players;
// console.log(playerx, playerz);

// // 2
// const [gk, ...fieldPlayers] = game.players[0];
// // console.log(gk, fieldPlayers);

// // 3
// const [...allPlayers] = [...game.players[0], ...game.players[1]];
// // console.log(allPlayers);

// // 4
// const [...players1Final] = [
//   "Thiago",
//   "Coutinho",
//   "Perisic",
//   ...game.players[0]
// ];
// // 5
// const newObj = { team1: 2.44, draw: 3.65, team2: 4.56 };
// ({ team1, draw, team2 } = newObj);
// console.log(newObj);

// 6
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// const printGoals = function(score1, score2, score3, score4) {
//   console.log(score1, score2, score3, score4, game.score);
// };
// printGoals(...game.scored);
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// 7
// newObj.team1 = game.team1;
// const winner = game.team1 || game.team2;
// console.log(`the winner is ${winner}`);

// console.log(game.odds);

// console.log(players1Final);

const resturant = {
  name: "Classico italiano",
  locatin: "Via Angelo Tavanti, firenze, Italy",
  categories: ["italian", "pizzeria", "vegetarian", "organic"],
  starterMenue: ["beans", "rice", "garlic", "bread", "fish"],
  mainMenu: ["pizza", "pasta", "risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0, //  open 24 hours
      close: 24
    }
  },

  orderMenu: function(starterIndex, mainIndex) {
    return [this.starterMenue[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({ starterIndex, time, address, mainIndex }) {
    console.log(`${this.starterMenue[starterIndex]}`, mainIndex, time, address);
  },
  orderPaster: function(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },

  orderPizza: function(leave, onion, ...otheringredients) {
    console.log(leave, onion, otheringredients);
  }
};

// ----------------------------------------------------------
//  MAPS
// .............
// const rest = new Map();
// rest.set("name", "classico italiano");
// rest.set(1, "firenze, italy");
// rest.set(2, "lisbon, portugal");
// console.log(rest);
// rest
//   .set("categories", ["italian", "pizzeria", "vegetarian", "organic"])
//   .set("open", 10)
//   .set("close", 23)
//   .set(true, "we are open")
//   .set(false, "we are closed");
// console.log(rest);

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 20;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// const arr = [1, 2];
// rest.set(arr, "test");
// console.log(rest.get(arr));

// MAP ITERATION

const question = new Map([
  ["question", "what is the best programming language?"],
  [1, "C"],
  [2, "java"],
  [3, "javaScript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Try again"]
]);
console.log(question);

// converting object to maps
const hoursMap = new Map(Object.entries(resturant.openingHours));
console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("your answer!"));
const answer = 3;
console.log(answer);
console.log(question.get(question.get("correct") === answer));

// convert maps into an array
console.log(...question);

//  ----------------------------------------------
//  SETS
// .........................
// const orderSet = new Set(["pizza", "pasta", "risotto", "pizza", "pasta"]);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has("pizza"));
// console.log(orderSet.has("bread"));
// console.log(orderSet.add("garlic"));
// console.log(orderSet.delete("risotto"));
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const staff = ["waiter", "chef", "manager", "chef", "waiter"];
// const staffUn = [...new Set(staff)];
// console.log(staffUn);
// const st = new Set(staff).size;
// console.log(st);
//

// LOOPING OVER OBJECT PROPERTY NAMES

// const property = Object.keys(resturant.openingHours);
// console.log(property);
// let openStr = `we are open on ${property.length} days: `;

// for (const day of Object.keys(resturant.openingHours)) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// OPTIONAL CHAINING
// --------------------------------------
// error of optional chaining
// if (resturant.openingHours.fri) console.log(resturant.openingHours.fri);

// WITH OPTIONAL CHAINING
// if (resturant.openingHours && resturant.openingHours.mon)
//   console.log(resturant.openingHours.mon? .open);
// const days = ["mon", "tue", "wed", "thur", "fri", "sat"];
// for (const day of days) {
//   const open = resturant.openingHours[day]?.open ?? "closed";
// }
// ============================
//  the for-of loop

// const menu = [...resturant.starterMenue, ...resturant.mainMenu];

// for (const items of menu) console.log(items);
// for (const [i, el] of menu.entries()) console.log(`${i + 1}:${el}`);

// ------------------------------
// ===========================================
// the && and || operator in short circuting
// -----------------------------------------------
// const resturant = 23;
// const guest = resturant.guest ? resturant.guest : 10;
// console.log(guest);

// const guest2 = resturant || 10;
// console.log(guest2);

// The Nullish operator

// resturant.guest = 0;
// const guest = resturant.guest || 10;
// console.log(guest);

// ==================================
// REST PATTERN AND PARAMETERS
// first part : destructuring
// using spread syntax because on the right hand side

// const ar = [1, 2, ...[3, 4]];
//  if its on the left side of the = operator then its REST

// const [...others] = [1, 2, 3, 4, 5, 6];
// console.log(others);

// const [...all] = [...resturant.mainMenu, ...resturant.starterMenue];
// console.log(all);

// objects

// const { sat, ...weekdays } = resturant.openingHours;
// console.log(sat, weekdays);

// second part:functions

// const add = function(...numbers) {
//   // console.log(numbers);
//   let sums = 0;
//   for (let i = 0; i < numbers.length; i++) sums += numbers[i];
//   console.log(sums);
// };

// add(1, 4, 5, 6);
// add(5, 2, 7, 8, 9, 8);
// add(6, 7);

// const x = [3, 5, 7];
// add(...x);

// resturant.orderPizza("kasn", "cray", "bald", "cent", "pin");

// ===================================

// resturant.orderDelivery({
//   time: "22:30",
//   address: "val street",
//   mainIndex: 2,
//   starterIndex: 3
// });
// =================================
// SPREAD OPERATORS
// =====================================
// const arr = [7, 4, 2];
// arr.unshift(3, 4, 5);
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...resturant.mainMenu, "fish", "plantain"];
// console.log(...newMenu);

// copy arry
// ----------------
// const mainMenuCopy = [...resturant.mainMenu];

// joining an array

// const starterMenuCopy = [...resturant.starterMenue];
// const bothCopy = [...mainMenuCopy, ...starterMenuCopy];
// console.log(...bothCopy);

// const ingredient = [
//   prompt("lets make paster! ingredient 1"),
//   prompt("ingredient 2"),
//   prompt("ingrdient 3")
// ];
// console.log(ingredient);
// console.log(resturant.orderPaster(...ingredient));

// using spread in objects

// const newresturant = { ...resturant, founder: "gustavo", foundIn: 1994 };
// console.log(newresturant);
// =======================================
//  destructionary of objects

// this is mostly used in an ApIs

// const { name, openingHours, locatin } = resturant;
// console.log(name, openingHours, locatin);

// const { name: resturantName, openingHours: Hours, locatin: avenue } = resturant;
// console.log(resturantName, Hours, avenue);

// creating a default object

// const { menu = [], starterMenue: starter = [] } = resturant;
// console.log(menu, starter);

// mutating variables;

// let a = 111;
// let b = 99;
// const obj = { a: 1, b: 23, c: 34 };
// ({ a, b } = obj);
// console.log(a, b);

// nested objects............

// const {
//   sat: { open, close }
// } = resturant.openingHours;
// console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = resturant.categories;
// console.log(main, secondary);
// switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// using destruction in an array to resign

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// console.log(resturant.orderMenu(2, 0));

// const nested = [2, 4, [5, 6]];
// // const [j, , h] = nested;
// const [j, , [h, k]] = nested;

// console.log(j, h, k);
