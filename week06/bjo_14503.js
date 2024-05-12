// 백준 - 로봇 청소기 (14503) ⭐ 중간에 포기함 -> 다시 풀어보기
// https://www.acmicpc.net/problem/14503
// 2024.05.12

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [x, y] = input[0]; // 방의 크기
let [r, c, d] = input[1]; // 로봇 청소기 좌표, 방향
const room = input.slice(2);
let answer = 1;
let count = 0;
// 현재 칸 청소
// 주변 탐색
// 청소x칸 있는 경우 (3번 케이스) -> 반시계 방향 90도 회전 -> 앞쪽 칸 청소x시 전진 -> 현재 칸 청소
// 청소x칸 없는 경우 (2번 케이스) -> (방향 유지) -> (후진 가능 시 후진 후 현재 칸 청소)
//                                            -> 후진 불가능 시 작동 멈춤

room[r][c] = "v";

while (r > 0 && c > 0 && r <= x && c <= y) {
  // 벽에 부딪히면 종료
  if (count === 4) {
    // 회전 수가 4면 종료
    if (d === 0) {
      if (room[r + 1][c] === 1) {
        break;
      }
      r++;
    } else if (d === 1) {
      if (room[r][c - 1] === 1) {
        break;
      }
      c--;
    } else if (d === 2) {
      if (room[r - 1][c] === 1) {
        break;
      }
      r--;
    } else if (d === 3) {
      if (room[r][c + 1] === 1) {
        break;
      }
      c++;
    }

    count = 0;
  }
  if (d === 0) {
    if (room[r][c - 1] !== 0) {
      d = 3;
      count++;
    } else {
      d = 3;
      c--;
      room[r][c] = ++answer;
      count = 0;
    }
  } else if (d === 1) {
    if (room[r - 1][c] !== 0) {
      d = 0;
      count++;
    } else {
      d = 0;
      r--;
      room[r][c] = ++answer;
      count = 0;
    }
  } else if (d === 2) {
    if (room[r][c + 1] !== 0) {
      d = 1;
      count++;
    } else {
      d = 1;
      c++;
      room[r][c] = ++answer;
      count = 0;
    }
  } else if (d === 3) {
    if (room[r + 1][c] !== 0) {
      d = 2;
      count++;
    } else {
      d = 2;
      r++;
      room[r][c] = ++answer;
      count = 0;
    }
  }
}

console.log(answer);
