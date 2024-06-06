//guess a number
console.log("Guess a number 1 to 10");
// declare variable
let  a:number=Math.floor(Math.random()*10);
import inquirer from "inquirer";
while(true){
    let input=await inquirer.prompt({
    name:"guess",
    type:"number",
    message:"Enter a number",
})
let ans=input.guess;
if(a==ans){
    console.log("congratulation your guessing number is correct");
    
break;}
else{   
     console.log("sorry try again")}
}
if(a>ans){
    console.log("hint:your number is greater")}
    else{
        console.log("hint, your number is lower");
    }
    console.log("game is over");


