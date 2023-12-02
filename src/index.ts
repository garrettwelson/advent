import { getArgs, checkIfExists, createFolder } from "./utils";

function main() {
  const { year, day, part } = getArgs();
  const pathName = `./src/${year}/day_${day}`;

  const exists = checkIfExists(pathName);

  if (!exists) {
    console.log(
      "Looks like there is no code set up for that year/day, I'll create it for you"
    );
    createFolder(pathName);
    console.log(
      "I copied the boilerplate files into the correct directory for you - good luck!"
    );
    return;
  }

  console.log(`Running solution for AOC ${year} Day ${day} | Part ${part}`);
  const solutionPath = `./${year}/day_${day}/part${part}.js`;
  const solution = require(solutionPath).default;
  console.log("solution is: ", solution);
}

main();
