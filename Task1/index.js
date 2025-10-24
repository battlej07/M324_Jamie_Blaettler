import chalk from "chalk";
import isOdd from "is-odd";

console.log(chalk.green("Hello, World!"));

let odd = isOdd(2);

console.log("Is the number 2 odd?", odd);
