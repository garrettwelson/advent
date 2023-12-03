import { parseInput } from "../../utils";

interface CountTracker {
  red: number;
  green: number;
  blue: number;
}

type colorType = "red" | "green" | "blue";

const input = parseInput();
const RED_MAX = 12;
const GREEN_MAX = 13;
const BLUE_MAX = 14;
const MAX_COUNTS: CountTracker = {
  red: RED_MAX,
  green: GREEN_MAX,
  blue: BLUE_MAX,
};

function main() {
  let sum = 0;
  input.forEach((line) => {
    const [gameInfo, allRounds] = line.split(":");
    const game = gameInfo.split(" ")[1];
    const rounds = allRounds.split(";");
    let validGame = true;
    for (const round of rounds) {
      const values = round.split(",");
      for (const val of values) {
        const [count, color] = val.trim().split(" ");
        // @ts-ignore
        if (count > MAX_COUNTS[color]) {
          validGame = false;
          break;
        }
      }
    }
    if (validGame) {
      // @ts-ignore
      sum += Number(game);
      console.log("everything seems valid, sum is now:", sum);
    }
  });
  return sum;
}

export default main();
