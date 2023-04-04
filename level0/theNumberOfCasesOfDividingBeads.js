/**
 * 구슬을 나누는 경우의 수
 * 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
 * 1 ≤ balls ≤ 30
 * 1 ≤ share ≤ 30
 * 구슬을 고르는 순서는 고려하지 않습니다.
 * share ≤ balls
 *
 * 자바스크립트의 Max_Safe_INTEGER값은 2^53-1으로 낮다. 안전 범위보다 큰 수를 변수에 저장은 할 수 있으나 정확성을 보장되지 않는다.
 * 따라서 BigInt를 사용해 길이의 제약없이 정수를 다룰 수 있다.
 */
function solution(balls, share) {
  if (balls == share) return 1; // 구슬 수와 구술 고르는 수가 같은 경우 한 가지
  var answer = factorial(balls) / (factorial(balls - share) * factorial(share));
  return Math.round(answer);
}

function factorial(n) {
  // 팩토리얼 함수
  let answer = BigInt(1);
  for (let i = 1; i <= n; i++) {
    answer *= BigInt(i);
  }
  return answer;
}
