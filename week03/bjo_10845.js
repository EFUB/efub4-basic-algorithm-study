// 백준 - 큐 (10845)
// https://www.acmicpc.net/problem/10845
// 2024.03.30

/* 시간 초과 방지 위해서 console.log() 사용을 줄일 것 */

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace(/\r/g, ""));

const queue = []; // 큐 배열
const answer = []; // 정답 배열

input.slice(1).map((line) => {
  const [command, num] = line.split(" ");
  if (command === "push") {
    queue.push(parseInt(num)); // 큐에 추가
  } else if (command === "pop") {
    if (queue.length === 0) {
      answer.push(-1); // 큐에 정수 없으면 -1 출력
    } else {
      answer.push(queue.shift()); // 큐 가장 앞에 있는 정수 출력
    }
  } else if (command === "size") {
    answer.push(queue.length); // 큐 사이즈 출력
  } else if (command === "empty") {
    if (queue.length === 0) {
      answer.push(1); // 큐가 비어있을 경우 1 출력
    } else {
      answer.push(0); // 0 출력
    }
  } else if (command === "front") {
    if (queue.length === 0) {
      answer.push(-1); // 큐에 정수 없으면 -1 출력
    } else {
      answer.push(queue[0]); // 큐 가장 앞에 있는 정수 출력
    }
  } else if (command === "back") {
    if (queue.length === 0) {
      answer.push(-1); // 큐에 정수 없으면 -1 출력
    } else {
      answer.push(queue[queue.length - 1]); // 큐 가장 뒤에 있는 정수 출력
    }
  }
});

console.log(answer.join("\n"));