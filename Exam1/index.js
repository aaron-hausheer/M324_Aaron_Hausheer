import chalk from "chalk";

let myUnusedVariable = 1;
const myLooseValue = 1;

if (myLooseValue == "1") {
	console.log("Lint test");
}

console.log(chalk.green("It works"));