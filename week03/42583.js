// 2024.03.28 풀이
// 다리를 지나는 트럭
// https://school.programmers.co.kr/learn/courses/30/lessons/42583

// [프로그래머스 문제 출처]
// https://icpckorea.org/2016/ONLINE/problem.pdf
// 추가 설명을 통해 문제 해석 - 모든 입력은 각 트럭에 대한 단위 길이와 단위 시간
// 트럭의 길이는 모두 같고, 다리의 길이가 곧 다리를 건너는 데 걸리는 시간

function solution(bridge_length, weight, truck_weights) {
	// bridge 위 상황을 나타내는 2차원 배열 (트럭 무게와 나가는 시간 정보 저장)
	let time = 0,
		bridge = [[0, 0]],
		currentWeight = 0;
	// 남은 대기 트럭, 다리 위 트럭이 모두 0일 때까지 반복
	while (bridge.length > 0 || truck_weights.length > 0) {
		// 다리 가장 끝 트럭의 나갈 시간이 현재 시간과 같다면
		if (bridge[0][1] === time) {
			// shift로 내보내고 현재 다리 위 무게 업데이트
			currentWeight -= bridge.shift()[0];
		}
		// 현재 다리 위 무게 + 다음으로 대기 중인 첫 트럭의 무게와 최대 무게 비교
		if (currentWeight + truck_weights[0] <= weight) {
			// 입장 가능하면 현재 다리 위 무게 업데이트
			currentWeight += truck_weights[0];
			// 다리 가장 처음에 [트럭 무게, 이 트럭이 나갈 시간] 추가
			// (1) 이때 대기 트럭 큐를 의미하는 truck_weights 배열을 shift하여 가장 첫 대기 트럭을 입장시킴
			// (2) 이 트럭이 나갈 시간은 현재 시간 + 건너는 데 걸리는 시간인 다리의 단위 길이
			bridge.push([truck_weights.shift(), time + bridge_length]);
		} else {
			// 다음 트럭이 입장 불가능하면 지금 다리에 있는 가장 끝 트럭이 빠져나가는 시간으로 점프
			// (다리 길이가 매우 길 때의 성능 개선을 위한 로직)
			// 다리에 트럭이 없다면 실행 안함
			if (bridge[0]) {
				// 시간이 지나는 시점(+1)은 해당 조건문 바깥이므로 미리 1을 빼서 시간 동기화
				time = bridge[0][1] - 1;
			}
		}
		// 시간 업데이트
		time++;
	}
	console.log(time);
	return time;
}

const bridge_length = 2,
	weight = 10,
	truck_weights = [7, 4, 5, 6];

solution(bridge_length, weight, truck_weights);
