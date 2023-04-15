/**
 * 연속된 수의 합
 * 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
 * 1 ≤ num ≤ 100
 * 0 ≤ total ≤ 1000
 * num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
 *
 * 다항식 활용
 * num=3, [x, x+1, x+2] -> 3x + (0+1+2) = total
 */
function solution(num, total) {
  var answer = [];
  let constant = 0;
  for (let i = 0; i < num; i++) {
    constant += i;
  }
  const x = (total - constant) / num;

  for (let i = 0; i < num; i++) {
    answer.push(x + i);
  }
  return answer;
}

// 다른 사람 풀이
// 가우스 공식 -> 연속된 수에 활용
// 1~100까지의 숫자의 덧셈: (첫 항 + 마지막 항) * (더할 숫자의 개수 총합의 절반) =  101 * 50
// total = (a+b) * (b-a+1)*1/2
function solution2(num, total) {
  const a = ((2 * total) / num + 1 - num) / 2;
  return Array(num)
    .fill()
    .map((_, i) => i + a);
}
