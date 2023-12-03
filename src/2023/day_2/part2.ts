import { parseInput } from "../../utils";

interface CountTracker {
  red: number;
  green: number;
  blue: number;
  [key: string]: number;
}

const input = parseInput();

function main() {
  let sum = 0;
  input.forEach((line) => {
    const [gameInfo, allRounds] = line.split(":");
    const rounds = allRounds.split(";");
    let mins: CountTracker = {
      red: 0,
      green: 0,
      blue: 0,
    };
    for (const round of rounds) {
      const values = round.split(",");
      for (const val of values) {
        const [count, color] = val.trim().split(" ");
        if (Number(count) > mins[color]) {
          mins[color] = Number(count);
        }
      }
    }
    const { red, green, blue } = mins;
    const power = red * green * blue;
    sum += power;
  });
  return sum;
}

export default main();
