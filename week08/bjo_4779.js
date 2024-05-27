// 백준 - 칸토어 집합 (4779) ⭐
// https://www.acmicpc.net/problem/4779
// 2024.05.26

function cantore(str) {
  if (str.includes("---")) {
    const len = str.length / 3;
    const splitedArr = [];
    for (let i = 0; i <= str.length - len; i += len) {
      splitedArr.push(str.slice(i, i + len));
    }
    splitedArr[0] = cantore(splitedArr[0]);
    splitedArr[1] = splitedArr[1].replaceAll("-", " ");
    splitedArr[2] = cantore(splitedArr[2]);
    return splitedArr.join("");
  }
  return str;
}

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const result = input.map((a) => {
  const dash = "-".repeat(3 ** a);
  return cantore(dash);
});

console.log(result.join("\n"));
