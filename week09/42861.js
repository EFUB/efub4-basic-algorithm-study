// 2024.06.26 풀이
// 섬 연결하기
// https://school.programmers.co.kr/learn/courses/30/lessons/42861

const n = 7;
const costs = [
	[2, 3, 7],
	[3, 6, 13],
	[3, 5, 23],
	[5, 6, 25],
	[0, 1, 29],
	[1, 5, 34],
	[1, 2, 35],
	[4, 5, 53],
	[0, 4, 75],
]; // 159

// 1. Set 이용 풀이

function solution(n, costs) {
	// 연결 비용이 낮은 순부터 정렬
	costs.sort((arr1, arr2) => arr1[2] - arr2[2]);
	// 가장 첫 요소 (가장 비용이 적은 연결) 구조분해 할당
	// 이때 answer에 첫 연결의 비용을 합한 것으로 생각하면 됨
	let [from, to, answer] = costs.shift();
	// 연결된 섬을 집합을 이용해 저장
	let visit = new Set([from, to]);
	// 방문한 섬의 개수가 모든 섬의 개수가 될 때까지 반복
	while (visit.size < n) {
		// 오름차순 정렬한 배열 costs에서 findIndex로 아래 조건에 맞는 가장 첫 요소의 인덱스 찾기
		// 조건은 visit이 다리가 연결하는 두 섬 중 하나만 포함하고 있는지 (사이클 생성 x)
		let index = costs.findIndex(
			([from, to]) =>
				(visit.has(from) && !visit.has(to)) ||
				(!visit.has(from) && visit.has(to))
		);
		// 위에서 찾은 인덱스의 요소 1개만 배열에서 제거, 현재 다리의 정보를 변수에 업데이트
		let [[from, to, cost]] = costs.splice(index, 1);
		answer += cost; // 선택한 다리의 비용을 합산
		visit.add(from).add(to); // 다리가 연결된 섬을 visit에 추가, 이때 중복 제거됨
	}
	return answer;
}
// console.log(solution(n, costs));

// 2. Kruskal 알고리즘 이용 풀이

// 최상위 노드의 인덱스를 찾는 함수
function find(parent, x) {
	// parent 배열의 인덱스와 값은 자기 자신으로 초기화됨
	if (parent[x] === x) {
		return x;
	}
	return (parent[x] = find(parent, parent[x]));
}
// a와 b가 다른 최상위 노드를 갖는다면 하나로 만드는 함수
function union(parent, a, b) {
	a = find(parent, a);
	b = find(parent, b);
	// 둘 중 더 작은 것을 최상위 노드로 하여 합함
	if (a < b) {
		parent[b] = a;
	} else {
		parent[a] = b;
	}
}
// 같은 최상위 노드를 가지는 연결된 노드인지 확인하는 함수
function isSameParent(parent, a, b) {
	a = find(parent, a);
	b = find(parent, b);
	return a === b;
}
// 정의한 함수를 사용하여 Kruskal 알고리즘을 실행하는 main 함수
function solution2(n, costs) {
	// 연결 비용이 낮은 순부터 정렬
	costs.sort((a, b) => a[2] - b[2]);
	// 각 섬에 대해 최상위 노드를 저장할 배열 선언, 초기값 모두 최상위 노드
	// n으로 각 섬 숫자를 요소로 가지도록 초기화 (0 ~ n-1)
	let parent = Array.from({ length: n }, (_, i) => i);
	// 비용 총합을 저장할 변수
	let answer = 0;
	// 각 다리의 정보를 구조분해 할당 후 다리에 대해 반복
	for (const [start, end, cost] of costs) {
		// 아직 연결되지 않은 섬이면
		if (!isSameParent(parent, start, end)) {
			union(parent, start, end); // 다리 연결
			answer += cost; // 비용 합산
		}
		// console.log(parent);
	}
	return answer;
}
console.log(solution2(n, costs));
