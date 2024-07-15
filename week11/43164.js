// 2024.07.12 풀이
// 여행경로
// https://school.programmers.co.kr/learn/courses/30/lessons/43164

const tickets = [
	["ICN", "SFO"],
	["ICN", "ATL"],
	["SFO", "ATL"],
	["ATL", "ICN"],
	["ATL", "SFO"],
];

function solution(tickets) {
	const answer = [];
	function DFS(ticket, start, path) {
		// 더이상 남은 티켓이 없다면 탐색 결과가 구하려는 여행 경로
		if (ticket.length === 0) answer.push(path);
		// 남은 사용하지 않은 티켓 전체에 대해 각각 반복
		for (let i = 0; i < ticket.length; i++) {
			// 현재 티켓의 출발지가 현재 탐색의 start와 같으면
			if (ticket[i][0] === start) {
				// 사용한 티켓은 제거하고, 경로에는 새로운 도착지를 추가
				// 이때 배열의 대입은 얕은 복사 (참조 복사) 되므로
				// 새로운 배열을 반환하는 slice 메소드를 이용하여 복사해야
				// 재귀 호출에서 다음번에 영향을 주지 않음
				let updatedTicket = ticket.slice();
				updatedTicket.splice(i, 1);
				let updatedPath = path.slice();
				updatedPath.push(ticket[i][1]);
				// 업데이트된 배열과 현재 티켓의 도착지를 출발지로 하여 탐색 계속
				DFS(updatedTicket, ticket[i][1], updatedPath);
			}
		}
	}
	// 초기 시작 매개변수는 시작 인천, 경로 'ICN'
	DFS(tickets, "ICN", ["ICN"]);
	// 정답이 여러 개일 때 알파벳 순서로 정렬 후 첫번째 경로 반환
	return answer.sort()[0];
}

console.log(solution(tickets));
