/**
 * 삼각형의 완성조건 (2)
 * 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
    가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
    삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.
 * sides의 원소는 자연수입니다.
 * sides의 길이는 2입니다.
 * 1 ≤ sides의 원소 ≤ 1,000
 * 
 * 나머지변이 최대 길이인 경우, sides[1] < 나머지 변 < sides[0] + sides[1]
 * sides[1]이 최대 길이인 경우, sides[1] - sides[0] < 나버지변 <= sides[1]
 */
function solution(sides) {
  sides.sort((a, b) => a - b);
  var answer = 0;
  // 가장 긴 변인 경우
  let min = sides[1] + 1;
  while (true) {
    if (min < sides[0] + sides[1]) {
      answer++;
      min++;
    } else {
      break;
    }
  }
  // sides[1]이 가장 긴 변인 경우
  min = sides[1] - sides[0] + 1;
  while (true) {
    if (min <= sides[1]) {
      answer++;
      min++;
    } else {
      break;
    }
  }
  return answer;
}

// 다른 사람 풀이
// (sides 오름차순일 때) sides[1] - sides[0] < 나버지변 <= sides[1], sides[1] < 나머지 변 < sides[0] + sides[1] 범위 계산
// a<x<b일 때 x의 개수는 b-a-1임
function solution2(sides) {
  sides.sort((a, b) => a - b); // 오름차순
  return 2 * sides[0] - 1;
}
