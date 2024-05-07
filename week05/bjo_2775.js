// 백준 - 부녀회장이 될테야 (2775)
// https://www.acmicpc.net/problem/2775
// 2024.05.05

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const t = parseInt(input[0]); // 테스트케이스 수
let answer = []; // 정답 배열

// 첫 줄에 주어진 n만큼 반복
for (var i = 0; i < t; i++) {
  let k = parseInt(input[i * 2 + 1]); // 층 수
  let n = parseInt(input[(i + 1) * 2]); // 호 수

  // 아파트 배열 초기화 - 최댓값이 14이므로 15 x 15 크기로 초기화하는 것 중요!!
  const apart = Array.from(new Array(15), () => new Array(15).fill(0));
  // 0층은 1, 2, 3 ...  이렇게 초기화
  apart[0] = Array.from({ length: 15 }, (v, i) => i + 1);

  // 1번째 배열부터 계속 반복
  // 해당 배열 안에서 전체 반복
  for (var x = 1; x < apart.length; x++) {
    // 1층부터 반복
    for (var y = 0; y < apart[1].length; y++) {
      // 해당 층의 호실마다
      for (var z = 0; z <= y; z++) {
        // 만약 y호이면, 아래 층의 1호부터 y호까지 더하기
        apart[x][y] += apart[x - 1][z];
      }
    }
  }

  answer.push(apart[k][n - 1]);
}

answer.forEach((elem) => console.log(elem));
