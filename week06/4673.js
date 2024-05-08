// 2024.05.08 풀이
// 셀프 넘버
// https://www.acmicpc.net/problem/4673

// 1. 생성자를 먼저 구하고 10000까지의 수 중 생성자가 아닌 수 출력
let array = [];
// 10000보다 작은 수에 대해 생성할 수 있는 모든 생성자 저장
for (let i = 1; i <= 10000; i++) {
	// 합산 값을 저장할 sum 변수, 먼저 i 저장
	let sum = i;
	// i의 모든 각 자리 수를 sum에 더함
	for (let j = 0; j < String(i).length; j++) {
		sum += +String(i)[j];
	}
	array.push(sum);
}
let answer = "";
for (let i = 1; i <= 10000; i++) {
	// 생성자 배열에 들어있지 않은 수를 답에 concat
	if (array.indexOf(i) === -1) {
		answer += i + "\n";
	}
}
console.log(answer);

// 2. 1~10000까지 각 인덱스에 셀프 넘버인지 아닌지 여부 저장
let arr = Array(10001).fill(false);
for (let n = 1; n <= 10000; n++) {
	// 숫자 n -> 문자열 -> 배열로 변환 후 모든 자리 합산
	// 배열에서 만들어진 생성자와 같은 인덱스에 true 저장
	arr[n + (n + "").split("").reduce((a, c) => a + +c, 0)] = true;
}
let num = [];
// 요소가 false인 경우만 해당 인덱스를 num 배열에 저장
arr.forEach((el, idx) => {
	if (!el) num.push(idx);
});
// 0번 인덱스는 제거하고 모든 셀프 넘버를 개행으로 이어 출력
console.log(num.slice(1).join("\n"));
