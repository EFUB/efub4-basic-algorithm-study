// 백준 - 치킨 TOP N (11582) ⭐
// https://www.acmicpc.net/problem/11582
// 2024.05.26

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];
let chickenRank = input[1].split(" ").map(Number);
const temp = new Array(n);
const current = +input[2];

function check(acc, curr) {
  if (curr - acc > n / current) return;

  const mid = Math.floor((acc + curr) / 2);

  let idx1 = acc,
    idx2 = mid + 1,
    idx3 = 0;

  while (idx1 <= mid && idx2 <= curr) {
    if (chickenRank[idx1] <= chickenRank[idx2]) {
      temp[idx3] = chickenRank[idx1];
      idx3 += 1;
      idx1 += 1;
    } else {
      temp[idx3] = chickenRank[idx2];
      idx3 += 1;
      idx2 += 1;
    }
  }
  while (idx1 <= mid) {
    temp[idx3] = chickenRank[idx1];
    idx3 += 1;
    idx1 += 1;
  }
  while (idx2 <= curr) {
    temp[idx3] = chickenRank[idx2];
    idx3 += 1;
    idx2 += 1;
  }
  for (let i = acc; i <= curr; i++) {
    chickenRank[i] = temp[i - acc];
  }
}

function merge(acc, cur) {
  if (acc === cur) return;
  const mid = Math.floor((acc + cur) / 2);
  merge(acc, mid);
  merge(mid + 1, cur);
  check(acc, cur);
}

merge(0, n - 1);
console.log(chickenRank.join(" "));
