/**
 * 유한소수 판별하기
 * 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

        ● 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
    두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.
 * a, b는 정수
 * 0 < a ≤ 1,000
 * 0 < b ≤ 1,000
 */
function solution(a, b) {
  let gcd = 1;
  let deno = b; // 분모

  // 최대공약수 구하기
  for (let i = 2; i <= Math.max(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      gcd *= i;
      a = a / i;
      b = b / i;
    }
  }
  // 기약분수의 분모
  deno = deno / gcd;

  // 소인수가 2와 5만 존재 -> 2또은 5로만 나눈 결과가 1이 나와야함
  while (deno % 2 === 0) {
    deno = deno / 2;
  }
  while (deno % 5 === 0) {
    deno = deno / 5;
  }

  return deno === 1 ? 1 : 2;
}

// 다른 풀이
// 최대공약수 - 유클리드 호제법
function solution(a, b) {
  let deno = b; // 분모 저장
  let remainder;
  while (a % b > 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }

  const gcd = b;

  deno = deno / gcd;
  while (deno % 2 === 0) {
    deno = deno / 2;
  }
  while (deno % 5 === 0) {
    deno = deno / 5;
  }

  return deno === 1 ? 1 : 2;
}
