// 백준 - 삼각형과 세 변 (5073)
// https://www.acmicpc.net/problem/5073
// 2024.03.24

// 삼각형의 조건 : 가장 긴 변의 길이 < 나머지 두 변의 길이의 합
// 세 변의 길이가 모두 같은 경우 : Equilateral
// 두 변의 길이만 같은 경우 : Isosceles
// 세 변의 길이가 모두 다른 경우 : Scalene
// 삼각형이 아닌 경우 : Invalid

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (const element of input) {
    if (element[0] === 0 && element[1] === 0 && element[2] === 0) continue;
    element.sort((a, b) => b - a);
    if (element[0] < element[1] + element[2]) {
      // 삼각형이 맞는 경우
      if (element[0] === element[1] && element[1] === element[2]) {
          // 세 변의 길이가 모두 같은 경우
          console.log("Equilateral");
      } else if (element[0] === element[1] || element[1] === element[2] || element[2] === element[0]) {
          // 두 변의 길이만 같은 경우
          console.log("Isosceles");
      } else if (element[0] !== element[1] && element[1] !== element[2] && element[2] !== element[0]) {
          console.log("Scalene");
      }
    } else {
      // 삼각형이 아닌 경우
        console.log("Invalid");
    }
}
