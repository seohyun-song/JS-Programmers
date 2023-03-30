/**
 * 7의 개수
 * 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
 * 1 ≤ array의 길이 ≤ 100
 * 0 ≤ array의 원소 ≤ 100,000
 * 예) array=[7, 77, 17], result = 4
 */
function solution(array) {
  var answer = 0;
  for (let char of array.join("")) {
    if (char == "7") answer++;
  }
  return answer;
}

// 다른 사람 풀이
// 문자열에서 특정 문자 개수 구하는 방법
// 1. str.split(char).length - 1
// 2. str.match(regexp).filter(item => item != '').length
function solution2(array) {
  return array.join("").split("7").length - 1;
}
