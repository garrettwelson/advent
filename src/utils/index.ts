import { readFileSync, existsSync, cpSync } from "fs";

interface ArgsObj {
  day?: number;
  part?: number;
  year?: number;
  [key: string | number]: any;
}

export function parseInput() {
  const { year, day } = getArgs();

  const input = readFileSync(`./src/${year}/day_${day}/input.txt`, {
    encoding: "utf-8",
  });
  return input.split("\n");
}

export function getArgs() {
  const currentDate: Date = new Date();

  const args: ArgsObj = {};
  const argsArr = process.argv.slice(2);
  argsArr.forEach((arg) => {
    const split = arg.split(":");
    args[split[0]] = Number(split[1]);
  });

  const day: number = args.day ?? Number(currentDate.getDate());
  const part: number = args.part ?? 1;
  const year: number = args.year ?? currentDate.getFullYear();

  validateInputs("day", day, 25);
  validateInputs("part", part, 2);
  validateInputs("year", year, Infinity);

  return { day, part, year };
}

function validateInputs(
  inputType: "day" | "part" | "year",
  inputVal: number,
  inputMax: number
) {
  const validYears: number[] = [2023];

  if (inputType === "year" && !validYears.includes(inputVal)) {
    throw new Error(
      `You entered ${inputVal} as a year and this project only has solutions for the years ${validYears} `
    );
  }
  if (inputVal < 1 || inputVal > inputMax) {
    throw new Error(
      `The ${inputType} must be number between 1 and ${inputMax}, you entered ${inputVal}`
    );
  }
}

export function createFolder(pathName: string) {
  const exists = checkIfExists(pathName);
  if (!exists) {
    cpSync("./boilerplate", pathName, { recursive: true });
  }
}

export function checkIfExists(pathName: string): boolean {
  return existsSync(pathName);
}
