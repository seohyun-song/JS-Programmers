/**
 * 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
 * 0 ≤ n ≤ 1,000,000
 */
function solution(n) {
  var answer = 0;
  answer = [...n.toString()]
    .map((el) => parseInt(el))
    .reduce((acc, curr) => acc + curr);
  return answer;
}
