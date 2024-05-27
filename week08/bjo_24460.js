// 백준 - 특별상이라도 받고 싶어 (24460) ⭐
// https://www.acmicpc.net/problem/24460
// 2024.05.26

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0]);
const graph = [];
for (let i = 1; i <= N; i++) {
  graph.push(input[i].split(" ").map(Number));
}

console.log(split_func(0, 0, N, graph));

function split_func(x, y, n, graph) {
  if (n === 1) {
    return graph[x][y];
  } else {
    const list = [
      split_func(x, y, n / 2, graph),
      split_func(x, y + n / 2, n / 2, graph),
      split_func(x + n / 2, y, n / 2, graph),
      split_func(x + n / 2, y + n / 2, n / 2, graph),
    ];
    list.sort((a, b) => a - b);
    return list[1];
  }
}
