// 백준 - 색종이 (2563) 🌟
// https://www.acmicpc.net/problem/2563
// 2024.03.16

// 100X100 사이즈 array에 0으로 채워둠
// 넓이가 포함된 점을 1로 바꿔둠
// 1의 개수 count

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 입력 두 번째 줄부터 2차원 배열로 저장 [x좌표, y좌표]
const coord = input.slice(1).map((line) => line.split(" ").map(Number));

// 도화지 - 100x100 배열에 전부 0으로 채우기
let board = Array.from({ length: 100 }, () => Array(100).fill(0));
let count = 0; // 1의 개수 count하는 변수

coord.forEach((elem) => {
  // elem[0] == x좌표, elem[1] == y좌표
  for (var i = elem[0]; i < elem[0] + 10; i++) {
    for (var j = elem[1]; j < elem[1] + 10; j++) {
      board[i][j] = 1; // 넓이가 포함된 점을 1로 바꿔둠
    }
  }
});

// board(도화지)에서 1의 개수 count
board.forEach((elem) => {
  count += elem.filter((elem) => elem === 1).length;
});

console.log(count);
