// 2024.03.31 풀이
// 디스크 컨트롤러
// https://school.programmers.co.kr/learn/courses/30/lessons/42627

function solution(jobs) {
	// 가장 효율적인 순서로 처리했을 때의 평균 시간, 소수점 이하 버림
	// 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리
	jobs.sort((a, b) => a[0] - b[0]);
	const jobsLength = jobs.length;
	let timeList = [];
	let queue = [];
	let currentTime = 0;
	while (queue.length || jobs.length) {
		// 매 초마다 요청을 한 작업이 있는지 찾아서 전부 queue에 추가
		if (jobs.length) {
			while (currentTime >= jobs[0][0]) {
				if (jobs.length) queue.push(jobs.shift());
				if (!jobs.length) break;
			}
		}
		// 요청한 작업이 없을 경우, 아직 요청 전인 작업이 있다는 뜻이므로 시간만 늘림
		if (!queue.length) {
			currentTime++;
			continue;
		}
		// queue를 최대한 빨리 끝나는 작업 순으로 재배치
		queue.sort((a, b) => a[1] - b[1]);
		// 모든 queue의 작업들에 대해 (종료 시간 - 요청 시간)을 timeList에 추가
		if (queue.length) {
			const [jobIndex, jobTime] = queue.shift();
			currentTime += jobTime;
			timeList.push(currentTime - jobIndex);
		}
	}
	return Math.floor(
		timeList.reduce((prev, curr) => prev + curr, 0) / jobsLength
	);
}

// [요청 시점, 소요 시간]
const jobs = [
	[0, 3],
	[1, 9],
	[2, 6],
];

console.log(solution(jobs)); // 9
