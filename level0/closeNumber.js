/**
 * 가까운 수
 * 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
 * 1 ≤ array의 길이 ≤ 100
 * 1 ≤ array의 원소 ≤ 100
 * 1 ≤ n ≤ 100
 * 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
 */
function solution(array, n) {
  let answer = array[0];
  let minAbs = Math.abs(array[0] - n);
  for (let i = 1; i < array.length; i++) {
    if (Math.abs(array[i] - n) < minAbs) {
      answer = array[i];
      minAbs = Math.abs(array[i] - n);
    }
    if (Math.abs(array[i] - n) == minAbs) {
      // 가장 가까운 수가 여러 개일 경우 더 작은 수
      answer = Math.min(array[i], answer);
    }
  }
  return answer;
}

// 다른 사람 풀이
// 절대값 오차가 가장 적은 리스트를 오름차순으로 정렬하여 가까운 수 중 가장 작은 수 반환
function solution2(array, n) {
  var answer = 0;
  answer = array
    .filter(
      // 절대값 오차가 가장 적은 값만 배열로 남김
      (a) => Math.abs(a - n) === Math.min(...array.map((a) => Math.abs(a - n)))
    )
    .sort((a, b) => a - b)[0]; // 오름차순으로 정렬하여 가까운 수 중 가장 작은 수 반환
  return answer;
}
