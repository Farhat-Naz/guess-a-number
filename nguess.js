"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//guess a number
console.log("Guess a number 1 to 10");
// declare variable
let a = Math.floor(Math.random() * 10);
const inquirer_1 = __importDefault(require("inquirer"));
while (true) {
    let input = await inquirer_1.default.prompt({
        name: "guess",
        type: "number",
        message: "Enter a number",
    });
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulation your guessing number is correct");
        break;
    }
    else {
        console.log("sorry try again");
    }
}
if (a > ans) {
    console.log("hint:your number is greater");
}
else {
    console.log("hint, your number is lower");
}
console.log("game is over");
