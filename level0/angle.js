/**
 * 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
 * 예각 : 0 < angle < 90
 * 직각 : angle = 90
 * 둔각 : 90 < angle < 180
 * 평각 : angle = 180
 * 0 < angle ≤ 180
 * angle은 정수입니다.
 */
function solution(angle) {
  var answer = 0;
  if (angle < 90) {
    answer = 1;
  } else if (angle == 90) {
    answer = 2;
  } else if (angle < 180) {
    answer = 3;
  } else {
    answer = 4;
  }
  return answer;
}

// 다른 사람 풀이
// Array.filter(): 함수의 결과 값을 true로 만드는 원소로만 구성된 새 배열 반환
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
