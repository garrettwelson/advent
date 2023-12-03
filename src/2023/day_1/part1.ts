import { parseInput } from "../../utils";

const input = parseInput();
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function main() {
  let sum = 0;
  input.forEach((line: string) => {
    const characters = line.split("");
    const numbers = characters.filter((char) => digits.includes(char));
    const callibrationVal = `${numbers[0]}${numbers[numbers.length - 1]}`;
    sum += Number(callibrationVal);
  });
  return sum;
}

export default main();
