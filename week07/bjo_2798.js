// 백준 - 블랙잭 (2798)
// https://www.acmicpc.net/problem/2798
// 2024.05.19

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = parseInt(input[0][0]);
const m = parseInt(input[0][1]);

input.shift();

let sum = 0;
let maxSum = 0;

//첫 번째 카드
for (let i = 0; i < n - 2; i++) {
  //두 번째 카드
  for (let j = i + 1; j < n - 1; j++) {
    //세 번째 카드
    for (let k = j + 1; k < n; k++) {
      //선택된 카드 3장의 합을 sum에 저장
      sum = input[0][i] + input[0][j] + input[0][k];
      //sum이 기존의 maxSum값보다 크고 M보다 작은지 확인
      if (sum <= m && sum > maxSum) {
        //해당되면 maxSum값을 sum값으로 변경
        maxSum = sum;
      }
    }
  }
}

console.log(maxSum);
