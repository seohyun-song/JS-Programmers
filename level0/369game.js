/**
 * 369게임
 * 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
 * 1 ≤ order ≤ 1,000,000
 *
 * Array.filter(): 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
 */
function solution(order) {
  var answer = 0;
  answer = order
    .toString()
    .split("")
    .filter((num) => num == "3" || num == "6" || num == "9").length;
  return answer;
}

// 다른 사람 풀이
// String.matchAll(regexp): returns an iterator of all results matching a string against a regular expression
function solution2(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
