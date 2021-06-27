// let js = "amazing";
// if (js === "amazing") alert("javascript");
// console.log(45 + 5 + 23 - 5);
// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);

// javascriptIsFun = "yes!";
// console.log(typeof javascriptIsFun);

// const firstName = "john";
// firstName = "maria";
// const firstName = "declan";
// const lastName = "ogbodo";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// console.log(x);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas);
// console.log(ageSarah);

// console.log(now - 1991 > now - 2018);

// let marksWeight = 78;
// let marksHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// let testMark = marksWeight / (1.69 * 1.69);
// console.log(testMark);
// let testJohn = johnWeight / (1.95 * 1.95);
// console.log(testJohn);

// marksWeight = 95;
// marksHeight = 1.88;
// johnWeight = 85;
// johnHeight = 1.76;

// let testDataMark = marksWeight / (marksHeight * marksHeight);
// console.log(testDataMark);
// let testDataJohn = johnWeight / (johnHeight * johnHeight);
// console.log(testDataJohn);

// markHigherBMI = testMark + testDataMark > testJohn + testDataJohn;

// console.log(markHigherBMI);

// const firstName = "declan";
// const job = "programmer";
// const birthYear = 1995;
// const year = 2021;

// const declan = "i'm"+ ' '+firstName , a first generation '+ job ' '+
// const declan = `i'm ${firstName}, a ${year - birthYear}years old ${job}`;
// console.log(declan);

// const age = 15;

// if (age >= 18) {
//   console.log("she can now get a licence");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`sarah has ${yearsLeft}years left to get a licence `);
// }

//

// let marksWeight = 78;
// let marksHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// const marksWeight = 95;
// const marksHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

// let testMark = marksWeight / (marksHeight * marksHeight);
// let testJohn = johnWeight / (johnHeight * johnHeight);

// let higherBMI;

// if (testMark > testJohn) {
//   higherBMI = `marks BMI ${testMark} is higher than johns BMI ${testJohn}`;
// } else {
//   higherBMI = `johns BMI ${testJohn} is higher than marks BMI ${testMark} `;
// }
// console.log(higherBMI);

// console.log("23" + 2);
// console.log(2 + "23");
// console.log(23 - 2 - 2 + 1);

// console.log("23" - "20" - 1);

// const age = Number(prompt("what is your age?"));
// // console.log(age);
// if (age === 26) {
//   console.log(age);
// } else {
//   console.log("invalid data");
// }

// const hasDriversLicence = true;
// const hasGoodVision = true;
// const isTired = true;

// if (hasDriversLicence && hasGoodVision) {
//   console.log("she can drive now");
// } else {
//   console.log("someone else should");
// }

// console.log(hasDriversLicence && hasGoodVision && !isTired);

// const dolphinScore = 96 + 108 + 89;
// const koalasScore = 88 + 91 + 110;

// const dolphinAverageScore = dolphinScore / 3;
// const koalasAverageScore = koalasScore / 3;
// console.log(koalasAverageScore, dolphinAverageScore);

// if (dolphinAverageScore > koalasAverageScore) {
//   console.log("dolphin is the winner");
// } else {
//   console.log("koalas wins");
// }
// if (dolphinAverageScore === koalasAverageScore) {
//   console.log("nobody wins");
// } else {
//   console.log("highest wins");
// }

// bonus 1 answer
// const dolphinScore = 97 + 112 + 101;
// const koalasScore = 109 + 95 + 123;
// const minimumScore = 100;

// const dolphinAverageScore = dolphinScore / 3;
// const koalasAverageScore = koalasScore / 3;
// console.log(koalasAverageScore, dolphinAverageScore, minimumScore);

// const dolphinMinimumScore = dolphinAverageScore >= minimumScore;
// console.log(dolphinMinimumScore);
// const koalasMinimumScore = dolphinAverageScore >= minimumScore;

// if (dolphinAverageScore > koalasAverageScore && minimumScore) {
//   console.log("dolphin wins");
// } else if (koalasAverageScore > dolphinAverageScore && minimumScore) {
//   console.log("kolas wins");
// }

// bonus 2

// const dolphinScore = 97 + 112 + 101;
// const koalasScore = 109 + 95 + 106;
// const minimumScore = 100;

// const dolphinAverageScore = dolphinScore / 3;
// const koalasAverageScore = koalasScore / 3;
// console.log(koalasAverageScore, dolphinAverageScore, minimumScore);

// const dolphinMinimumScore = dolphinAverageScore >= minimumScore;
// console.log(dolphinMinimumScore);
// const koalasMinimumScore = dolphinAverageScore >= minimumScore;

// if (dolphinAverageScore > koalasAverageScore && minimumScore) {
//   console.log("dolphin wins");
// } else if (koalasAverageScore > dolphinAverageScore && minimumScore) {
//   console.log("kolas wins");
// } else if (
//   dolphinAverageScore === koalasAverageScore &&
//   dolphinMinimumScore &&
//   koalasMinimumScore
// ) {
//   console.log("draw");
// }

// const dolphinAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;

// if (dolphinAverage > koalasAverage) {
//   console.log("dolphins win");
// } else if (dolphinAverage === koalasAverage) {
//   console.log("draw");
// }

// const dolphinAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;
// const minimumScore = 100;

// if (dolphinAverage > koalasAverage && dolphinAverage >= minimumScore) {
//   console.log("dolphins win");
// } else if (dolphinAverage === koalasAverage) {
//   console.log("draw");
// } else if (koalasAverage > dolphinAverage && koalasAverage >= minimumScore) {
//   console.log("kolas wins");
// }

// const dolphinAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 106) / 3;
// const minimumScore = 100;

// if (dolphinAverage > koalasAverage && dolphinAverage >= minimumScore) {
//   console.log("dolphins win");
// } else if (dolphinAverage === koalasAverage) {
//   console.log("draw");
// } else if (koalasAverage > dolphinAverage && koalasAverage >= minimumScore) {
//   console.log("kolas wins");
// }
// -----------------------

// SWITCH STATMENT

// -------------------------

// const day = "monda";

// switch (day) {
//   case "monday":
//     console.log("i have classes by 3");
//     console.log("i am ready");
//     break;
//   case "tuesday":
//     console.log("can decide not to come");
//     break;
//   case "wednesday":
//     console.log("i cook this day");
//     break;
//   case "thursday":
//   case "friday":
//     console.log("visiting days");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("resting day");
//     break;
//   default:
//     console.log("i am a genuis");
// }
// ------------------------------------------
//    USING ELSE IF STATEMENT TO REWRITE THE SWITCH STATEMENT ABOVE

// const day = "thursday";

// if (day === "monday") {
//   console.log("i have classes by 3");
//   console.log("i am ready");
// } else if (day === "tuesday") {
//   console.log("can decide not to come");
// } else if (day === "wednesday") {
//   console.log("i cook this day");
// } else if (day === "thursday" || "friday") {
//   console.log("visiting days");
// } else if (day === "saturday" || "sunday") {
//   console.log("resting day");
// } else {
//   console.log("i am a genuis");
// }

// ------------------------------------------
// STATEMENTS AND EXPRESSIONS

//    written in my note
// ------------------------------------------

// CONDITIONAL OR TENERAY OPERATOR

// const age = 23;
// age >= 18
//   ? console.log("i can drink wine")
//   : console.log("i should drink water");
//    -----------------------------------------
//    CODING CHALLENGE
//    ---------------------------------------
// const billvalue = 275;
// const tip = 275 * (15 / 100);
// console.log(
//   `the bill was ${billvalue} and the tip was ${tip} and the total value was ${billvalue +
//     tip}`
// );

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `the bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
// );
