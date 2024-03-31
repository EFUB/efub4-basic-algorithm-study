// 백준 - 카드 (1835)
// https://www.acmicpc.net/problem/1835
// 2024.03.31

/*
[0, 0, ...] 이렇게 초기화해두고
카드 조건 순서대로 따라가주기
while문 한 번 돌 때마다 포인터는 +1 해주고
뒤로 보내면 뒤로 가는 횟수 +1 해주고, 이미 내놓은 카드는 pass해가면서
뒤로 가는 횟수를 모두 채우면 해당 위치에 카드를 넣어줌
*/

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

const cardList = Array(parseInt(input)).fill(0); // 카드 순서 배열 (input길이만큼 전부 0으로 초기화)
let currentIndex = 0;  // 포인터 역할 - 계속 증가하지만 cardList 길이는 정해져 있으므로 나머지 형태로 사용
let count = 0; // 뒤로 보낸 횟수 count

// input 길이만큼 반복 실행
for (var i = 1; i <= parseInt(input); i++) {
    while (true) { // 해당 단계의 카드의 위치가 정해질 때까지 무한 반복
        if (cardList[currentIndex % parseInt(input)] === 0) { // 요소가 0일 때 - 아직 카드 내용이 정해지지 않았음
            if (count === i) { // 뒤로 보낸 횟수가 i번만큼 채워지면
                cardList[currentIndex % parseInt(input)] = i; // 해당 카드를 넣어줌
                count = 0; // 뒤로 보낸 횟수 초기화
                break; // while문 break하고 다음 단계로 넘어감
            } else {
                count++; // 뒤로 보낸 횟수 + 1
            }
            currentIndex++; // 포인터 다음 index로 넘겨줌
        } else { // 요소가 0이 아닐 때 - 이미 올려둔 카드이므로 고려하지 않음
            currentIndex++; // 포인터만 다음 index로 넘겨주고 pass
            continue;
        }
    }
}

console.log(cardList.join(" "));