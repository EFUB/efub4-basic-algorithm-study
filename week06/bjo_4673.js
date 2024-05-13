// 백준 - 셀프 넘버 (4673) ⭐ 나중에 다시 풀어보기
// https://www.acmicpc.net/problem/4673
// 2024.05.12

// n과 n의 각 자리 수를 더하는 함수
function d(n) {
  let number = n;
  let result = 0;

  for (let i = 0; i < n.toString().length; i++) {
    result += number % 10; // number를 10으로 나눠가면서
    number = Math.floor(number / 10); // 각 자리 수를 result에 합하기
  }
  return n + result;
}

const range = 10000;
// 0 ~ 10000 까지 셀프넘버 배열 생성하고 true로 초기화
let selfNumbers = Array(range + 1).fill(true);

for (let i = 0; i <= range; i++) {
  // 셀프넘버가 아니면 false로 변환
  selfNumbers[d(i)] = false;
}

for (let i = 0; i < range; i++) {
  if (selfNumbers[i]) {
    // true인 것만 출력
    console.log(i);
  }
}
