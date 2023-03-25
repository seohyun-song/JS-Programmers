/**
 * 팩토리얼
 * i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
   - i! ≤ n
 * 0 < n ≤ 3,628,800
 */
function solution(n) {
  var answer = 0;
  let i = 1;
  while (true) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
      factorial *= j;
    }
    if (factorial > n) {
      answer = i - 1;
      break;
    }
    i++;
  }
  return answer;
}

// 다른 사람 풀이
// 이중 루프 안씀
function solution2(n) {
  let answer = 1;
  let i = 1;
  while (true) {
    i = i * answer;
    if (i > n) {
      answer--;
      break;
    }
    answer++;
  }
  return answer;
}
