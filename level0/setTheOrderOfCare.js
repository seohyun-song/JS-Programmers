/**
 * 진료 순서 정하기
 * 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
 * 중복된 원소는 없습니다.
 * 1 ≤ emergency의 길이 ≤ 10
 * 1 ≤ emergency의 원소 ≤ 100
 *
 * Array.sort(): 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환. 원본 배열 수정됨.
 */
function solution(emergency) {
  var answer = [];
  const arr = emergency.slice().sort((a, b) => b - a);
  for (let i = 0; i < emergency.length; i++) {
    answer.push(arr.indexOf(emergency[i]) + 1);
  }
  return answer;
}

// 다른 사람 풀이
// map의 활용
function solution2(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
