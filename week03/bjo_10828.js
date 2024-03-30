// 백준 - 스택 (10828)
// https://www.acmicpc.net/problem/10828
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

const stack = []; // 스택 배열
const answer = []; // 정답 배열

input.slice(1).map((line) => {
  const [command, num] = line.split(" ");
  if (command === "push") {
    stack.push(parseInt(num)); // 스택에 추가
  } else if (command === "pop") {
    if (stack.length === 0) {
      answer.push(-1); // 스택에 정수 없으면 -1 출력
    } else {
      answer.push(stack.pop()); // 스택 가장 위에 있는 정수 출력
    }
  } else if (command === "size") {
    answer.push(stack.length); // 스택 사이즈 출력
  } else if (command === "empty") {
    if (stack.length === 0) {
      answer.push(1); // 스택이 비어있을 경우 1 출력
    } else {
      answer.push(0); // 0 출력
    }
  } else if (command === "top") {
    if (stack.length === 0) {
      answer.push(-1); // 스택에 정수 없으면 -1 출력
    } else {
      answer.push(stack[stack.length - 1]); // 스택 가장 위에 있는 정수 출력
    }
  }
});

console.log(answer.join("\n"));