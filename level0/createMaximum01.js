/**
 * 최댓값 만들기 (2)
 * 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 * -10,000 ≤ numbers의 원소 ≤ 10,000
 * 2 ≤ numbers 의 길이 ≤ 100
 */
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  let answer = numbers[0] * numbers[1];

  for (let i = 1; i < numbers.length; i++) {
    if (answer < numbers[i] * numbers[i + 1]) {
      answer = numbers[i] * numbers[i + 1];
    }
  }
  return answer;
}
