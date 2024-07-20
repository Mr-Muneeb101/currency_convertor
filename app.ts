#! /usr/bin/env node
import inquirer from "inquirer";
let currency: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
}

let user_input = await inquirer.prompt([
    {
        name: "from",
        message: "Please enter thr currency from you want to convert",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    }, {
        name: "to",
        message: "Please enter thr currency you want to convert in",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    }, {
        name: "amount",
        type: "input",
        message: "Please enter the amount",
        validate:(amm)=>{
            if (amm) {
                return true
            } else {
                return "Please enter the ammount"
            }
        }
    },
]);
let from = currency[user_input.from];
// console.log(from);
let to = currency[user_input.to];
// console.log(to);
let amount = user_input.amount;
// console.log(amount);

let base = amount / from;
let converted = base * to;
console.log(converted);
