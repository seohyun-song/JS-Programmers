/**
 * 소인수분해
 * 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 * 2 ≤ n ≤ 10,000
 */
function solution(n) {
  var answer = [];
  let temp = [];
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) temp.push(i);
  }

  for (let i = 0; i < temp.length; i++) {
    let count = 0;
    for (let j = 2; j <= temp[i]; j++) {
      if (temp[i] % j == 0) count++;
    }
    if (count == 1) answer.push(temp[i]);
  }
  return answer;
}

// 다른 사람 풀이
// Set???
function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}
