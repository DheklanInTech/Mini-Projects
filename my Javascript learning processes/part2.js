"use strict";
// ___________________________
// FUNCTIONS
// ___________________________

// function logger() {
//   console.log("i am a genius");
// }
// logger();
// logger();
// logger();

// function fruitProcessor(orange, apples) {
//   const juice = `i make juice with ${orange} oranges and ${apples} apples `;
//   return juice;
// }
// const makejuice = fruitProcessor(5, 3);
// console.log(makejuice);

// ===========================================
// FUNCTION DECLARATION

// function calcAge1(birthyear) {
//   const age = 2031 - birthyear;
//   return age;
// }
// const age1 = calcAge1(1995);
// console.log(age1);

// FUNCTION EXPRESSION

// const calcAge2 = function(birthyear) {
//   const ages = 2035 - birthyear;
//   return ages;
// };
// const age2 = calcAge2(1995);
// console.log(age2);

// ARROW FUNCTION

// const calcAge = birthYear => 2034 - birthYear;
// const age = calcAge(1992);
// console.log(age);
// const calcAge = birthYear => 2031 - birthYear;
// const age = calcAge(1997);
// console.log(age);

// const retirementYear = (birthYear, firstName) => {
//   const age = 2035 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(retirementYear(1996, "declan"));
// function cutPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(orange, apples) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(orange);

//   const juice = `i make juice with ${orangePieces} pieces of  oranges and ${applePieces} pieces of apples `;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear) {
//   return 2030 - birthYear;
// };
// const retirementYear = function(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   //   return retirement;
//   return ``;
// };
// console.log(retirementYear(1995, "declan"));
// CODING CHALLENGE-------------------

// TEST DATA 1--------------

// const calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };
// // console.log(calcAverage(44, 23, 71));
// const dolphineScore = calcAverage(44, 23, 71);
// const koalasScore = calcAverage(65, 54, 49);

// const checkWinner = function(dolAverage, kolAverage) {
//   if (dolAverage >= 2 * kolAverage) {
//     console.log(`Dolphins win ${dolAverage} Vs. ${kolAverage}`);
//   } else if (kolAverage >= 2 * dolAverage) {
//     console.log(`koalas wins ${kolAverage} Vs. ${dolAverage}`);
//   } else {
//     console.log("Nobody wins");
//   }
// };
// checkWinner(dolphineScore, koalasScore);

// TEST DATA 2---------------------

// const calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };
// // console.log(calcAverage(44, 23, 71));
// const dolphineScore = calcAverage(85, 54, 41);
// const koalasScore = calcAverage(23, 34, 27);

// const checkWinner = function(dolAverage, kolAverage) {
//   if (dolAverage >= 2 * kolAverage) {
//     console.log(`Dolphins win ${dolAverage} Vs. ${kolAverage}`);
//   } else if (kolAverage >= 2 * dolAverage) {
//     console.log(`koalas wins ${kolAverage} Vs. ${dolAverage}`);
//   } else {
//     console.log("Nobody wins");
//   }
// };
// checkWinner(dolphineScore, koalasScore);
// --------------------------------------
// INTRODUCTION TO ARRAYS
// ------------------------------------------

// const cars = ["volvo", 1995, "benz", 2021, "bentley"];
// console.log(cars);
// console.log(cars[2]);
// const food = new Array("garri", "beans", "rice");
// console.log(food);

// console.log(cars[cars.length - 1]);

// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1993, 1956, 1995, 1998, 2009];
// const age = [
//   calcAge(years[3]),
//   calcAge(years[0]),
//   calcAge(years[years.length - 1])
// ];
// console.log(age);
// CODING CHALLENGE

// const calcTip = function(bill) {
//   const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };
// const per = calcTip(100);
// console.log(per);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);
// INTRODUCTION TO OBJECTS
// -------------------------------------

// const declan = {
//   firstName: "ikemdinachi",
//   lastName: "ogbodo",
//   age: 2030 - 2021,
//   likes: ["cars", "house", "cloths"]
// };
// console.log(declan);

// HOW TO RETREIVE DATA FROM OBJECT AND CHANGE DATA USING DOT AND BRACKET NOTATION

// console.log(declan.lastName);
// console.log(declan["lastName"]);
// const nameKey = "Name";
// console.log(declan["first" + nameKey], declan["last" + nameKey]);

// const intrestedIn = prompt(
//   "what do you want to know about declan? choose between firstname,lastname,age or likes"
// );
// console.log(declan[intrestedIn]);
// if (declan[intrestedIn]) {
//   console.log(declan[intrestedIn]);
// } else {
//   console.log("wrong data input");
// }

// console.log(
//   `${declan.firstName} has ${declan.likes.length} likes and his best is a ${declan.likes[1]}`
// );

// const jonas = {
//   firstName: "declan",
//   lastName: "ogbodo",
//   birthYear: 2021,
//   job: "programmer",
//   friends: ["mikel", "dee", "oscar"],
//   hasDriversLicence: true,

//   calcAge: function() {
//     return 2037 - this.birthYear;
//   }
//   calcAge: function() {
//     this.age = 2039 - this.birthYear;
//     return this.age;
//   }
// };

// console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1995));

// const jonas = {
//   firstName: "declan",
//   lastName: "ogbodo",
//   birthYear: 1975,
//   job: "programmer",
//   friends: ["mikel", "dee", "oscar"],
//   hasDriversLicence: true,

//   calcAge: function() {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()} years old ${
//       this.job
//     }, and has   ${this.hasDriversLicence ? "a" : "no"} drivers licence`;
//   }
// };

// console.log(jonas.getSummary());
// console.log(jonas.calcAge());
// console.log(jonas.age);

// if (jonas.hasDriversLicence) {
//   console.log(
//     `${
//       jonas.firstName
//     } is a ${jonas.calcAge()}year old programmer, and he has a drivers license
//     `
//   );
// } else {
//   console.log(
//     `${
//       jonas.firstName
//     } is a ${jonas.calcAge()} year old programmer, and he has no drivers licence `
//   );
// }
// const objMark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function() {
//     this.Bmi = this.mass / (this.height * this.height);
//     return this.Bmi;
//   },

//   fullName: function() {
//     this.name = this.firstName + this.lastName;
//     return this.name;
//   }
// };
// console.log(objMark.calcBMI());

// const objJohn = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   fullName: function() {
//     this.name = this.firstName + this.lastName;
//     return this.name;
//   },

//   calcBMI: function() {
//     this.Bmi = this.mass / (this.height * this.height);
//     return this.Bmi;
//   }
// };
// console.log(objJohn.calcBMI());
// console.log(objJohn.fullName());

// const nameKey = "Name";
// // console.log(objJohn["first" + nameKey]);
// console.log(
//   `${objJohn.fullName()} BMI ${objJohn.calcBMI()} is higher than ${objMark.fullName()} ${objMark.calcBMI()}`
// );

// console.log(`${objJohn["firstName"] + objJohn["lastName"]}`);

// --------------------------------------------------------------------------

// FOR LOOP
// -----------------------------------

// for (let num = 1; num <= 10; num++) {
//   console.log(`i want to lift this weight ${num} times`);
// }

// const jonasArray = [
//   "jonas",
//   "ikemdinachi",
//   2037 - 1991,
//   "teacher",
//   ["micheal", "peter", "steven"]
// ];
// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   // filling types array

//   // types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }
// console.log(types);

// const years = [1995, 2007, 1997, 2010, 1987];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// TWO IMPORTANT STATEMENT FOR "FOR LOOP"
// --------------------------------------
// CONTINUE AND BREAK
// CONTINUE; its to continue the current illteration of the loop and continue to the next one

// break; its used to completly terminate the whole loop

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;
//   console.log(jonasArray[i]);
// }
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;
//   console.log(jonasArray[i]);
// }

// HOW TO LOOP BACKWARDS AND LOOP INSIDE ANOTHER LOOP

// const jonasArray = [
//   "jonas",
//   "ikemdinachi",
//   2037 - 1991,
//   "teacher",
//   ["micheal", "peter", "steven"]
// ];
// for (let i = jonasArray.length-1; i >= 0; i--) {
//   console.log(jonasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(` exercise ${exercise}:lifting weight repeation ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`lifting weight repeatation ${rep}`);
// }

// let rep = 1;
// while (rep <= 5) {
//   console.log(` while :lifting weight repeatation ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("loop ends here");
//   }
// }

// const measureKelvin = function() {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("degree celcius:"))
//   };
//   console.table(measurement);

//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// const array1 = [17, 21, 23];
// const array2 = [12, 5, -5, 0, 4];

// console.log(`...${array1[0]}C...${array1[1]}C...${array1[2]} `);

// const printForcast = function(arr) {
//   let str = "";

//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}c in ${i + 1} days..`;
//   }
//   console.log(str);
// };
// printForcast(array1);
