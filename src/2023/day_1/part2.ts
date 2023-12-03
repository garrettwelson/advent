import { parseInput } from "../../utils";

// Guesses
// 54790
// 54766
// 54770

const input = parseInput();
const VALID_DIGITS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const VALID_WORDS = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const DIGITS_MAP: any = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};
const VALID_SUBSTRINGS = [
  "o",
  "on",
  "one",
  "t",
  "tw",
  "two",
  "t",
  "th",
  "thr",
  "thre",
  "three",
  "f",
  "fo",
  "fou",
  "four",
  "f",
  "fi",
  "fiv",
  "five",
  "s",
  "si",
  "six",
  "s",
  "se",
  "sev",
  "seve",
  "seven",
  "e",
  "ei",
  "eig",
  "eigh",
  "eight",
  "n",
  "ni",
  "nin",
  "nine",
];

function main() {
  let sum = 0;
  for (const line of input) {
    let i = 0;
    const max = line.length;
    let values: string[] = [];

    // loop over the string while our index is below the string length
    while (i < max) {
      let current = line[i];

      // check if current value is a numerical digit
      if (VALID_DIGITS.includes(current)) {
        // if so, store it
        values.push(current);
      }

      //   if string is a letter and the start of a valid word, we want to act on it
      if (VALID_SUBSTRINGS.includes(current)) {
        // capture the substring and a current index
        let substring = current;
        let tempIndex = i;
        // we want to keep looping as long as we build valid substrings
        while (VALID_SUBSTRINGS.includes(substring)) {
          let next = line[tempIndex + 1];
          substring += next;
          // if the substring is now a valid word
          if (VALID_WORDS.includes(substring)) {
            // get the value, store it, and break out of this loop
            const validWord = DIGITS_MAP[substring];
            values.push(validWord);
            break;
          }
          // increment our temporary index
          tempIndex++;
        }
      }

      // finally, we increment our index
      i++;
    }
    // Get our calibration value and add it to the sum
    const calVal = Number(`${values[0]}${values[values.length - 1]}`);
    sum += calVal;
  }

  return sum;
}

export default main();
