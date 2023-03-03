/**
 * 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */
function solution(numer1, denom1, numer2, denom2) {
  const answer = [];
  let numer3 = numer1 * denom2 + numer2 * denom1;
  let denom3 = denom1 * denom2;

  let gcd = 1;

  for (let i = 2; i <= Math.min(numer3, denom3); i++) {
    if (numer3 % i === 0 && denom3 % i === 0) gcd = i;
  }

  numer3 = Math.floor(numer3 / gcd);
  denom3 = Math.floor(denom3 / gcd);
  answer.push(numer3);
  answer.push(denom3);

  return answer;
}
