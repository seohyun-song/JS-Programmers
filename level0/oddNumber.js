/**
 * 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
 */
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) answer.push(i);
  }
  return answer;
}

// 다른 사람 풀이
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i += 2) answer.push(i);
  return answer;
}

function solution(n) {
  var answer = [];
  answer = Array(n) // Array(arrayLength) 배열생성
    .fill(1) // fill(value) 배열을 정적인 값 하나로 채움
    .map((v, i) => v + i) // map(currentValue, index) 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열 반환
    .filter((v) => v % 2 === 1); // filter() 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
  return answer;
}
