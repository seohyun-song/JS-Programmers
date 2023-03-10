/**
 * 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
 * 1 ≤ array의 길이 ≤ 100
 * 0 ≤ array의 원소 ≤ 1,000
 * 0 ≤ n ≤ 1,000
 *
 * Array.filter(): 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
 */
function solution(array, n) {
  var answer = 0;
  array = array.filter((item) => item === n);
  answer = array.length;
  return answer;
}

// 다른 사람 풀이
function solution(array, n) {
  var answer = 0;
  answer = array.filter((item) => item === n).length;
  return answer;
}
