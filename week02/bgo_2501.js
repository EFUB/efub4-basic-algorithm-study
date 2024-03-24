// 백준 - 약수 구하기 (2501)
// https://www.acmicpc.net/problem/2501
// 2024.03.24

// N의 약수들 중 K번째로 작은 수를 출력

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const n = parseInt(input[0]);
const k = parseInt(input[1]);
const yaksu = [];

for (var i = 1; i <= n; i++) {
  if (n % i === 0) yaksu.push(i);
}

if (yaksu.length < k) {
    console.log(0);
} else {
    console.log(yaksu[k-1]);
}
